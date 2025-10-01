#!/bin/bash
export COMPOSER_NO_INTERACTION=1
export COMPOSER_NO_DEV=1

SCRIPTPATH=$(readlink -f "$0")
DIRPATH=$(dirname "$SCRIPTPATH")
ABSPATH=$DIRPATH/../..
TODAY=`date +%Y-%m-%d`

# à la racine du projet
cd $ABSPATH || exit 1

# log
exec > >(tee -ia var/log/deploy-$TODAY.log) 2>&1

# git
# récupération du dernier tag et checkout dessus
git fetch --tags
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
git checkout $latestTag

if [ -f 'deploy.sh' ]; then
	./deploy.sh
fi

# composer
php -f /usr/local/bin/composer install

exit 0