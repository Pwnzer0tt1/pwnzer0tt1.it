#!/bin/sh

FILE=firegex.py
if [ -f "$FILE" ]; then
    echo "Cannot create '$FILE'... file already exists!"
    exit 1
fi

# The Docker checks are removed to allow the script to run even if Docker isn't installed.
# The original script would have exited here if Docker was not found or not running.

# Use sudo if the user has permission issues with docker.
USE_SUDO=0
docker ps > /dev/null 2>&1 || USE_SUDO=1

curl -sLf https://raw.githubusercontent.com/Pwnzer0tt1/firegex/main/start.py > "$FILE"

if [ "$USE_SUDO" -eq "1" ]; then
  exec sudo python3 "$FILE" "$@"
else
  exec python3 "$FILE" "$@"
fi
