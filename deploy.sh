#!/bin/bash

SCRIPTPATH=$(readlink -f "$0")
DIRPATH=$(dirname "$SCRIPTPATH")

# Vérification de l'environnement
ENVFILES=(
    "$DIRPATH/.env"
    "$DIRPATH/.loc.env"
    "$DIRPATH/config/.env"
    "$DIRPATH/config/.loc.env"
)
envFile=""
for file in "${ENVFILES[@]}" ; do
    if [ -f "$file" ]; then
        envFile="$file"
        break;
    fi
done
if [ -z "$envFile" ]; then
    echo "Pas d'environnement trouvé."
    exit 1
fi

# load env variables
set -a; source "$envFile"; set +a

# à la racine du projet
cd "$DIRPATH" || exit 1

# nvm version
if [ "$ENV" != "LOC" ]; then
    if [ ! -d "$HOME/.nvm/" ]; then
        cd "$HOME/" && git clone https://github.com/nvm-sh/nvm.git .nvm || exit 1
        cd "$DIRPATH" || exit 1
    fi
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

    nvm_version=$(<"${DIRPATH}/.nvmrc")
    locally_resolved_nvm_version=$(nvm ls --no-colors "${nvm_version}" | command tail -1 | command tr -d '\->*' | command tr -d '[:space:]')
    # If it is not already installed, install it
    # `nvm install` will implicitly use the newly-installed version
    if [ "${locally_resolved_nvm_version}" = 'N/A' ]; then
        nvm install "${nvm_version}" || exit 2;
    elif [ "$(nvm current)" != "${locally_resolved_nvm_version}" ]; then
        nvm use "${nvm_version}" || exit 2;
    fi
fi

# With no corepack available : nvm setup + curl -L https://unpkg.com/@pnpm/self-installer | node
pnpm install || exit 4;
pnpm run build || exit 5;


exit 0
