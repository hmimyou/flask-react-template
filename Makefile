run-server:
	export FLASK_APP=server && flask run -p 5001 --debug

watch-client:
	cd client && npm run watch

build-client:
	cd client && npm run build && cd ..

install-client:
	cd client && npm install && cd ..
