#/usr/bin/env bash
FILE=firegex.py
if [ -f "$FILE" ]; then
        echo "Cannot create '$FILE'... file already exists!";
        exit 1;
fi
curl -sLf https://raw.githubusercontent.com/Pwnzer0tt1/firegex/main/start.py > $FILE
exec python3 $FILE "$@"
