#!/bin/bash
docker ps -qa | xargs docker stop
docker ps -qa | xargs docker rm
echo "Todos os containers foram parados e removidos!"
