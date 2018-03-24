#!/bin/sh

cd images

echo "var socks = [" > ../socks.js

FILES=*
for f in $FILES
do
  echo "\"$f\"," >> ../socks.js
done

echo "];" >> ../socks.js

cd ..
