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
      type: 'input',
      name: 'author',
      message: "What is plugin author's name?"
    },
    {
      type: 'select',
      name: 'packageManager',
      message: 'Which node package manager do you use?',
      choices: ['npm', 'yarn'],
      initial: 'npm'
    },
    {
      type: 'confirm',
      name: 'isScoped',
      message: 'Do you want to public scoped package?',
      initial: false
    }
  ]);

  return {
    response
  };
};
