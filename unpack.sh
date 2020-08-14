#!/bin/bash

pushd ./backends/api/
tar -xvf *.tar.gz
popd
exit
docker-compose run --rm api npm install

pushd ./backends/swagger-producer/
tar -xvf *.tar.gz
popd
docker-compose run --rm swagger-producer-api npm install

mkdir -p ./frontend/build
pushd ./frontend
tar -xvf *.tar.gz
cp ./config/constants.json ./build/
popd

