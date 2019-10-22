const chalk = require('chalk');

require('../lib');

process.on('unhandledRejection', () => {
  console.log();
  console.log(chalk.green.bold('OK! See you later👋'));
  console.log();
});
