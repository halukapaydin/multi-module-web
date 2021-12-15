#!/bin/bash
ROOT_PATH=$(pwd)
modules=("module-common" "module-1" "module-2" "dist")
for module in ${modules[@]}; do
  MODULE_PATH="$ROOT_PATH/$module"
  cd $MODULE_PATH
  rm -fr ./node_modules
  rm -fr ./package-lock.json
  npm install
  npm run-script build
done
