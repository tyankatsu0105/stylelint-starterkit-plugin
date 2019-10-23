#!/usr/bin/env node

const chalk = require('chalk');

require('../lib');

process.on('unhandledRejection', () => {
  console.log();
  console.log(chalk.red.bold('OK! See you later👋'));
  console.log();
});
