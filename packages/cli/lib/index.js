'use strict';
const { execSync } = require('child_process');

const result = execSync('ls -a');

console.log(`${result}`);
