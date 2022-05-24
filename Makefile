install:
	npm ci

brain-games:
	node bin/brain-games.js # запуск игры

publish:
	npm publish --dry-run

lint:
	npx eslint .