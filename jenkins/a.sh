node -v
npm -v
pwd
npm install
npm run build
cd dist
rm -f ./config.js
filePath="dist_$BUILD_TIMESTAMP.zip"
zip -r ../$filePath * -x "*.git*" "*.zip"
mkdir -p /var/ROOT/build/fertileWoman
mv -f ../$filePath /var/ROOT/build/fertileWoman/
cd /var/ROOT/build/fertileWoman/
ls -1 dist_* | sort -t '_' -k 2 -nr | tail -n +8 | xargs -I {} sh -c 'echo "Deleting file {}"; rm -f {}'