Setup instructions for APIGROW

0/ Install NodeJS V12
1/ Run unpack.sh
2/ Create a .env file from the .env.dist in the folder ./backends/api/ (Should work as is)
3/ Configure ApiGrow url and Gravitee details in 
    ./backends/api/.env
    ./frontend/build/constants.json
4/ Call docker-compose up 
