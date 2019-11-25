run:
	export FLASK_APP=server && export FLASK_ENV=development && flask run -p 5001

build:
	cd client && npm run build && cd ..
