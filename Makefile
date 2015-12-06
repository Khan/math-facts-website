serve:
	npm install
	webpack-dev-server --progress --colors --port 8021

build:
	NODE_ENV=production webpack -p --config webpack.production.config.js