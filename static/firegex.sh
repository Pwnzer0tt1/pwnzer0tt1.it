#!/bin/sh

FILE=firegex.py
if [ -f "$FILE" ]; then
        echo "Cannot create '$FILE'... file already exists!"
        exit 1
fi

which docker > /dev/null 2>&1 || { echo "Install docker before running this command!"; exit 1; }

docker ps 2>&1 | grep "daemon running" > /dev/null && { echo "Docker is not running! Please start docker daemon before use this command!"; exit 1; }

USE_SUDO=0
docker ps 2>&1 | grep "permission denied" > /dev/null && USE_SUDO=1

curl -sLf https://raw.githubusercontent.com/Pwnzer0tt1/firegex/main/start.py > "$FILE"

if [ "$USE_SUDO" -eq "1" ]; then
  exec sudo python3 "$FILE" "$@"
else
  exec python3 "$FILE" "$@"
fi
