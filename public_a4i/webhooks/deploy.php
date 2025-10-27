<?php

require_once(__DIR__ . '/../../vendor/autoload.php');

use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
if (file_exists(__DIR__ . '/../../config/.env')) {
	$dotenv->load(__DIR__ . '/../../config/.env');
} elseif (file_exists(__DIR__ . '/../../config/.loc.env')) {
	$dotenv->load(__DIR__ . '/../../config/.loc.env');
} else {
	die("Fichier d'environnement manquant");
}

/**
 * Script de déclenchement de déploiement
 */

error_reporting(E_ALL);

define('ROOT_PATH', realpath(__DIR__ . '/../..'));

function get_branch_name(array $conf, $env) {
	if (!isset($conf['branch_names'][$env])) {
		return false;
	}
	return $conf['branch_names'][$env];
}

/**
 * retrieve deploy conf in an array
 *
 * @return array
 */
function get_conf(): array {
	return parse_ini_file(ROOT_PATH . "/config/webhooks/deploy.conf", true);
}

/**
 * Retrieve Gitlab access token
 *
 * @param  array $conf
 *
 * @return string
 */
function get_token($conf): string {
	return $conf['github_token']['token'];
}

/**
 * Retrieve all deploy logs
 *
 * @param  string $log_path
 *
 * @return array
 */
function getLogs($log_path): array {
	$logs = glob($log_path . '/deploy-*.log');
	if (!empty($logs)) {
		usort($logs, function ($a, $b) {
			return filemtime($b) - filemtime($a);
		});

		return $logs;
	}

	return [];
}

function deleteOldLogs($log_path, $fs): void {
	$logs = getLogs($log_path);
	foreach ($logs as $log) {
		if (filemtime($log) < strtotime("-14 days")) {
			$res = unlink($log);
			if ($res) {
				$txt = "Suppression du log $log dépassant la limite de 14 jours d'existance";
			} else {
				$txt = "Erreur lors de la suppression log $log dépassant la limite de 14 jours d'existance";
			}
			fWriteAndPrint($fs, $txt);
		}
	}
}

global $output;
$output='';
/**
 * @param resource $stream
 * @param string $data
 * @return int|false
 */
function fWriteAndPrint($stream, string $data) {
	global $output;
	try {
		$result = fwrite($stream, $data . PHP_EOL);
	} catch (Exception $e) {
		$output .= ((string) $e) . PHP_EOL;
	}

	if (headers_sent()) {
		if ($output !== '') {
			echo $output;
			$output = '';
		}
		echo $data . PHP_EOL;
	} else {
		$output .= $data . PHP_EOL;
	}

	return $result;
}

function run(): void {
	$log_path = ROOT_PATH . '/var/log';
	$now_date = date('Y-m-d');
	$now_time = date('Y-m-d H:i:s');

	$fs = fopen($log_path . '/deploy-' . $now_date . '.log', 'a');
	fWriteAndPrint($fs, PHP_EOL . "*** BEGIN Deploy {$now_time} ***");

	deleteOldLogs($log_path, $fs);

	$conf = get_conf();
	$access_token = get_token($conf);

	// Takes raw data from the request
	$body = file_get_contents('php://input');

	$resultSlack = '';
	if (!hash_equals('sha256=' . hash_hmac('sha256', $body, $access_token), $_SERVER['HTTP_X_HUB_SIGNATURE_256'])) {
		echo "Forbidden access";
		header('HTTP/1.1 403 Forbidden');
		$resultSlack = 'Invalid signature';
		fWriteAndPrint($fs, "Invalid signature");
	} else {
		$env = strtolower($_ENV['ENV']);

		/**
		 * @var $json null|mixed
		 */
		$json = null;
		try {
			$json = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
		} catch (JsonException $e) {
			header('HTTP/1.1 500 Internal Server Error');
			fWriteAndPrint($fs, "error = " . ((string) $e));
		}

		if ($json !== null) {
			$githubEvent = $_SERVER['HTTP_X_GITHUB_EVENT'];
			$pushName = $json['ref'];
			$pushType = $json['ref_type'];

			if ($githubEvent === 'push' && strrpos($pushName, 'refs/heads/') === 0) {
				$pushType = 'push-commit';
				$pushName = str_replace("refs/heads/", "", $json['ref']);
			}

			$validEnv = false;
			if ($githubEvent === 'create' || $githubEvent === 'push') {
				if ($env === 'prod') {
					$validEnv = $githubEvent === 'create' && $pushType === 'tag';
				} else {
					$validEnv = $pushType === 'push-commit' && $pushName === get_branch_name($conf, $env);
				}
			}

			if ($validEnv) {
				fWriteAndPrint($fs, "env = $env");
				fWriteAndPrint($fs, realpath(ROOT_PATH . "/bin/webhooks/deploy-$env.sh"));
				exec(realpath(ROOT_PATH . "/bin/webhooks/deploy-$env.sh"), $output, $result_code);
				fWriteAndPrint($fs, implode(PHP_EOL, $output));
				fWriteAndPrint($fs, "Deploy result code : $result_code");
				$resultSlack = "Deploy result code : $result_code";
			} else {
				$expectedBranch = '';
				if ($env !== 'prod') {
					$expectedBranch = ", expected : " . get_branch_name($conf, $env);
				}

				$resultSlack = "Invalid event for environment $env ($pushType - $pushName" . $expectedBranch . ')';
				fWriteAndPrint($fs, $resultSlack);
			}
		}
	}

	if (!empty($_ENV['NOTICE_WEBHOOK_URL']) && !empty($_ENV['NOTICE_WEBHOOK_CHANNEL'])) {
		try {
			$msg = sprintf("Déploiement de %s\n%s", $_ENV['NOTICE_WEBHOOK_CHANNEL'], $resultSlack);

			// Use curl to send your message
			$c = curl_init($_ENV['NOTICE_WEBHOOK_URL']);
			curl_setopt($c, CURLOPT_SSL_VERIFYPEER, true);
			curl_setopt($c, CURLOPT_POST, true);
			curl_setopt($c, CURLOPT_POSTFIELDS, ['payload' => json_encode([
				'text' => $msg
			], JSON_THROW_ON_ERROR)]);
			curl_exec($c);
			curl_close($c);
		} catch (Exception $e) {
			fWriteAndPrint($fs, "error = " . ((string) $e));
		}
	}

	fWriteAndPrint($fs, PHP_EOL . "*** END Deploy {$now_time} ***");
	fclose($fs);
}

run();
if ($output !== '') {
	echo $output;
}
exit(0);
