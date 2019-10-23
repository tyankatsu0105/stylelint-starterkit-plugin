'use strict';
const { prompt } = require('enquirer');

module.exports = async () => {
  const response = await prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is plugin's name?",
      initial: 'stylelint-plugin-original'
    },
    {
      type: 'select',
      name: 'packageManager',
      message: 'Which node package manager do you use?',
      choices: ['npm', 'yarn'],
      initial: 'npm'
    }
  ]);

  return {
    response
  };
};
