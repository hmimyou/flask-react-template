run-server:
	export FLASK_APP=server && export FLASK_ENV=development && flask run -p 5001

watch-client:
	cd client && npm run watch

build-client:
	cd client && npm run build && cd ..

install-client:
	cd client && npm install && cd ..
