#!/usr/bin/env bash

#Clear watchman watches:
watchman watch-del-all

#Delete the `node_modules` folder:
rm -rf node_modules
rm -rf $TMPDIR/react-*

#Remove lock file
rm -f yarn.lock

#Reset Metro Bundler cache:
rm -rf /tmp/metro-bundler-cache-*

#Remove haste cache:
rm -rf /tmp/haste-map-react-native-packager-*

#install deps
yarn install

echo "✨ Cache cleaned up ✨"
