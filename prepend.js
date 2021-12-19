const { read, write } = require('fs-jetpack');
const { join } = require('path');

const file = read(join('dist', 'src', 'printer.js'));
const prependedFile = `#!/usr/bin/env node\n\n` + file;

write(join('dist', 'src', 'printer.js'), prependedFile);