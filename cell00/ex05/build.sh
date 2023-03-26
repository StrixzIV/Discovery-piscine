#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
fi

i=1;

for user in "$@" 
do
    mkdir "ex$user";
    chmod +x "ex$user";
    i=$((i + 1));
done
