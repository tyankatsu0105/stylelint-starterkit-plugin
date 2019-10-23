const Listr = require('listr');
const execa = require('execa');
const chalk = require('chalk');

const prompt = require('./prompt');
const files = require('./files');
const absolutePath = require('../utils/absolutePath');

(async () => {
  const { response } = await prompt();
  const { name, packageManager } = response;

  const tasks = new Listr([
    {
      title: 'Generating template',
      task: () => files(response)
    },
    {
      title: `Installing dependencies with ${packageManager}`,
      task: () =>
        execa(packageManager, ['install'], {
          cwd: absolutePath(name)
        })
    }
  ]);

  tasks.run().then(() => {
    console.log();
    console.log(
      chalk.green.bold(`
${name} has just been generated!
Enjoy creating Stylelint plugin✌️`)
    );
    console.log();
  });
})();
