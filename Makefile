install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-games.js evenodd

publish:
	npm publish --dry-run

