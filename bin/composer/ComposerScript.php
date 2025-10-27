<?php

namespace Bin\Composer;

use mysqli;
use RuntimeException;
use Symfony\Component\Dotenv\Dotenv;

/**
 * Classe d'installation / de mise à jour de projet
 * @noinspection PhpUnused
 */
class ComposerScript {
    /**
     * Chemin absolu du projet
     * @var string
     */
    public static string $project_path;

    /**
     * Chemin absolu du dossier config
     * @var string
     */
    public static string $config_path;

    /**
     * Chemin absolu du dossier config/certs
     * @var string
     */
    public static string $certs_path;

    /**
     * Chemin absolu du dossier config/apache
     * @var string
     */
    public static string $apache_path;

    /**
     * Chemin absolu du dossier config/logrotate
     * @var string
     */
    public static string $logrotate_path;

    /**
     * Chemin absolu du dossier var/log
     * @var string
     */
    public static string $log_path;

    /**
     * Chemin absolu du dossier config/sql
     * @var string
     */
    public static string $sql_path;

    /**
     * Nom du domaine
     * @var string
     */
    public static string $project_domain;

    /**
     * Présence du fichier composer.lock
     * @var boolean
     */
    public static bool $lock_exists;

    protected static function execAndPrint(string $command, &$output=null, &$result_code=null) {
        $returnFn = exec($command, $output, $result_code);
        if (count($output) > 0) {
            echo implode(PHP_EOL, $output) . PHP_EOL;
        }
        return $returnFn;
    }

    /**
     * Triggered after composer install with lock file
     *
     * @return void
     * @noinspection PhpUnused
     */
    public static function installProject(): void {
        self::init();
        self::prepareProject();

        if ($_ENV['ENV'] === 'LOC') {
            self::generateSslCerts();
            self::generateVhost();
            if (is_dir(self::$sql_path)) {
                $is_new_db = self::createDB();
                self::uploadDB($is_new_db);
            }
            self::addLogRotate();
            self::enableProject();
        }

        echo  ">>> END Composer Generate" . PHP_EOL;
    }

    /**
     * Triggered after composer update or install without lock file
     * @return void
     * @noinspection PhpUnused
     */
    public static function updateProject(): void {
        self::init();
        self::prepareProject();

        if ($_ENV['ENV'] === 'LOC') {
            self::generateSslCerts();
            self::generateVhost();
            if (is_dir(self::$sql_path)) {
                $is_new_db = self::createDB();
                self::uploadDB($is_new_db);
            }
            self::addLogRotate();
            self::enableProject();
        }

        echo ">>> END Composer Generate" . PHP_EOL;
    }

    /**
     * Initiate path and environment variables
     *
     * @return void
     */
    protected static function init(): void {
        $PATH = getenv('PATH');
        if ($PATH === false) {
            $PATH = '';
        }
        if (!strpos($PATH, '/usr/local/sbin')) {
            $arr = explode(':', $PATH);
            $arr[] = '/usr/local/sbin';
            $arr[] = '/usr/local/bin';
            $arr[] = '/usr/sbin';
            $arr[] = '/usr/bin';
            $arr[] = '/sbin';
            $arr[] = '/bin';
            $arr[] = './node_modules/.bin';
            if (PHP_VERSION_ID >= 80000) {
                $PATH = implode(':', $arr);
            } else {
                /** @noinspection PhpDeprecatedImplodeUsageInspection */
                /** @noinspection ImplodeArgumentsOrderInspection */
                $PATH = implode($arr, ':');
            }
            putenv('PATH=' . $PATH);
        }

        self::$project_path   = dirname(__DIR__, 2);
        self::$config_path    = self::$project_path . '/config';
        self::$certs_path     = self::$config_path . '/certs';
        self::$apache_path    = self::$config_path . '/apache';
        self::$logrotate_path = self::$config_path . '/logrotate';
        self::$log_path       = self::$project_path . '/var/log';
        self::$sql_path       = self::$config_path . '/sql';

        // création des logs
        if (!is_dir(self::$project_path . '/var') && !mkdir(self::$log_path, 0777, true) && !is_dir(self::$log_path)) {
            throw new RuntimeException(sprintf('Directory "%s" was not created', self::$log_path));
        }

        echo ">>> BEGIN Composer Generate" . PHP_EOL;

        $dotenv = new Dotenv();

        if (file_exists(self::$config_path . '/.env')) {
            $dotenv->load(self::$config_path . '/.env');
        } elseif (file_exists(self::$config_path . '/.loc.env')) {
            $dotenv->load(self::$config_path . '/.loc.env');
        } else {
            die("Fichier d'environnement manquant");
        }

        if ($_ENV['ENV'] === 'LOC') {
            self::$project_domain = "{$_ENV['PROJECT_NAME']}.loc.artwai.fr";
            if (isset($_ENV['PROJECT_DOMAIN'])) {
                self::$project_domain = (string) ($_ENV['PROJECT_DOMAIN']);
            }
        }

        self::is_lock_exists();
    }


    protected static function is_lock_exists(): void {
        if (is_file(self::$project_path . '/composer.lock')) {
            self::$lock_exists = true;
        } else {
            self::$lock_exists = false;
        }
    }

    /**
     * Supprime les dossiers et fichiers inutiles
     * Change le nom du thème enfant pour le nom du projet
     *
     * @return void
     */
    protected static function prepareProject(): void {
        $logPath = self::$project_path . '/var/log';
        // création des logs
        if (!is_dir(self::$project_path . '/var') && !mkdir(self::$project_path . '/var/log', 0777, true) && !is_dir($logPath)) {
            throw new RuntimeException(sprintf('Directory "%s" was not created', $logPath));
        }
    }


    /**
     * Generate SSL Certificate
     *
     * @return void
     */
    protected static function generateSslCerts(): void {
        self::execAndPrint("mkdir -p " . self::$certs_path);
        self::execAndPrint("mkcert " . self::$project_domain . ' > /dev/null');
        self::execAndPrint("mv " . self::$project_domain . "* " . self::$certs_path);
    }


    /**
     * Generate local vhost if not exists
     *
     * @return void
     */
    protected static function generateVhost(): void {
        $project_name = $_ENV['PROJECT_NAME'];
        $temp_dest    = self::$apache_path . "/$project_name.conf";
        $final_dest   = "/etc/apache2/sites-available/$project_name.conf";
        $baseRoot = isset($_ENV['BASE_ROOT']) ? '/' . trim($_ENV['BASE_ROOT'], '/') : '/public';



        $model  = self::$apache_path . '/local.template.conf';
        $content = file_get_contents($model);

        $versionArray = explode('.', PHP_VERSION);
        $verZeros = '';
        if (strlen($versionArray[0]) === 1) {
            $verZeros = '0';
        } elseif (strlen($versionArray[0]) >= 3) {
            throw new RuntimeException('VERSION_ERROR');
        }
        if (strlen($versionArray[1]) > 1) {
            throw new RuntimeException('VERSION_ERROR');
        }

        $patterns = [
            '[PROJECT_DOMAIN]',
            '[PROJECT]',
            '[PATH_TO_PROJECT]',
            '[PORT_PHP]',
            '[BASE_ROOT]'
        ];
        $replacements = [
            self::$project_domain,
            $project_name,
            self::$project_path,
            "19$verZeros$versionArray[0]$versionArray[1]",
            $baseRoot
        ];

        $content = str_replace($patterns, $replacements, $content);

        file_put_contents($temp_dest, $content);

        self::execAndPrint("sudo mv $temp_dest $final_dest");
        self::execAndPrint("sudo chown root:root $final_dest");
    }

    /**
     * Créé la base de données dans Mysql if not exists
     *
     * @return boolean
     */
    protected static function createDB(): bool {
        if (!isset($_ENV['DB_HOST']) || !isset($_ENV['DB_USER'] )|| !isset($_ENV['DB_PASSWORD'])) {
            echo "[createDB] No BDD" . PHP_EOL;
            return false;
        }

        $conn = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);
        $is_new = false;
        if ($conn->connect_error) {
            echo  "Connexion MySQL échouée : " . $conn->connect_error . PHP_EOL;
        } else {
            $db_name = $_ENV['DB_NAME'];

            // Si la table n'existe pas
            $sql   = "SELECT COUNT(*) AS `exists` FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMATA.SCHEMA_NAME='$db_name'";
            $query = $conn->query($sql);
            $row   = $query->fetch_object();

            if (!$row->exists){
                $model      = self::$sql_path . '/create-db.template.sql';
                $content     = file_get_contents($model);
                $pattern     = '[DB_NAME]';
                $replacement = $db_name;
                $sql         = str_replace($pattern, $replacement, $content);

                if ($conn->query($sql) === TRUE) {
                    echo  "Base de donnée $db_name créée" . PHP_EOL;
                    $is_new = true;
                } else {
                    echo  "Erreur lors de la création de la base de donnée " . $conn->error . PHP_EOL;
                }
            } else {
                echo  "La base de donnée $db_name existe déjà." . PHP_EOL;
            }
            $conn->close();
        }
        return $is_new;
    }

    /**
     * Injecte les données dans la base de données
     *
     * @param  boolean $is_new_db
     *
     * @return void
     */
    protected static function uploadDB(bool $is_new_db): void {
        if (!isset($_ENV['DB_HOST']) || !isset($_ENV['DB_USER'] )|| !isset($_ENV['DB_PASSWORD'])) {
            echo "[uploadDB] No BDD" . PHP_EOL;
            return;
        }

        $do_upload_db = false;
        $db_name = $_ENV['DB_NAME'];
        if (!$is_new_db) {
            $conn = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);

            if ($conn->connect_error) {
                echo "Connexion MySQL échouée : " . $conn->connect_error . PHP_EOL;
            } else {

                // Vérification du nombre de tables en base
                $check_sql = "SELECT COUNT(DISTINCT `TABLE_NAME`) AS anyAliasName FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `table_schema` = '$db_name'";
                $query = $conn->query($check_sql);
                $row   = $query->fetch_row();
                $conn->close();

                if ($row[0] < 1) {
                    echo "La base de donnée $db_name est vide." . PHP_EOL;
                    $do_upload_db = true;
                }
            }
        } else {
            $do_upload_db = true;
        }

        if ($do_upload_db) {
            $sql_file = self::$sql_path . "/$db_name.sql";
            if (file_exists($sql_file)) {
                echo  "Fichier de base de données LOC en chargement..." . PHP_EOL;
                self::execAndPrint('mysql ' . $db_name . ' < ' . $sql_file);
            } else {
                echo  "Aucun fichier de base de données executable automatiquement n'a été trouvé." . PHP_EOL;
            }
        }
    }

    /**
     * Ajout de rotation de logs
     *
     * @return void
     */
    protected static function addLogRotate(): void {
        echo "Ajout des log rotate" . PHP_EOL;
        $project_name    = $_ENV['PROJECT_NAME'];
        $final_dest      = "/etc/logrotate.d/$project_name";

        if (!file_exists($final_dest)) {
            $project_log_dir = self::$log_path;
            $temp_dest       = self::$config_path . "/{$project_name}_logrotate";
            $model          = self::$logrotate_path . '/template';
            $content         = file_get_contents($model);
            $content         = str_replace('[PATH_TO_LOGS]', $project_log_dir, $content);

            file_put_contents($temp_dest, $content);

            self::execAndPrint("sudo mv $temp_dest $final_dest");
            self::execAndPrint("sudo chown root:root $final_dest");
        }
    }

    /**
     * Activation locale du projet dans Apache
     *
     * @return void
     */
    protected static function enableProject(): void {
        $project_name = $_ENV['PROJECT_NAME'];
        $conf_file    = "$project_name.conf";

        /** @noinspection SpellCheckingInspection */
        self::execAndPrint("sudo a2ensite $conf_file");

        /** @noinspection SpellCheckingInspection */
        $apache_test = self::execAndPrint('sudo apache2ctl configtest 2>&1');

        if ($apache_test !== "Syntax OK") {
            /** @noinspection SpellCheckingInspection */
            self::execAndPrint("sudo a2dissite $conf_file");
            echo "/!\ Une erreur est présente dans le fichier de conf Apache du projet $conf_file." . PHP_EOL;
        } else {
            echo "Tout est OK, re-lancement d'Apache..." . PHP_EOL;
            self::execAndPrint("sudo service apache2 reload");
        }
    }
}
