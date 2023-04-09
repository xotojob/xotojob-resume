set -o allexport; source .env; set +o allexport

ufw allow $LETTER_PORT

sudo git stash

sudo git pull 

sudo docker-compose down

sudo docker image prune --all --force

docker-compose build --no-cache

sudo docker-compose up -d --build
