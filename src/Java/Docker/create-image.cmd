docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otdellogistiki-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otdellogistiki-java/app ../../..
