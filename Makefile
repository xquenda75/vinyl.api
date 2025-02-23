npm_init:
	npm init

npm_install-express:
	npm install express

npm_pg:
	npm install pg

npm-install-nodemon:
	npm install nodemon -D

npm_install-morgan:
	npm install morgan

npm-install-jsonwebtoken:
	npm install jsonwebtoken

docker-compose-up-bd:
	docker-compose -f Docker\docker-compose-bd.yml up -d

eb-init-profile:
	eb init --profile=userEB

eb-deploy:
	eb deploy Api-vinyl-env

git-add-remote-gitlab:
	git remote add gitlab https://gitlab.com/xquenda14/vinylapi.git
	git remote -v
