const fs = require('fs');
const path = require('path');
const glob = require('glob');
const fromCWD = require('from-cwd');

glob.sync('./dist/cjs/**/*.js').forEach((file) => {
	const cjsFile = file.replace(/\.js$/, '.cjs.js');
	const relPath = path.relative('./dist/cjs', cjsFile);
	fs.renameSync(file, fromCWD('./dist', relPath));
});
