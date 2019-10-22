'use strict';

const fs = require('fs-extra');
const path = require('path');

const makeProjectDir = (name) => fs.mkdirs(name);

const makeFiles = (name) => {
  const templatePath = path.join(__dirname, '../../', 'template', 'src');

  fs.copy(templatePath, name);
};

module.exports = async (response) => {
  const { name } = response;

  await makeProjectDir(name);
  await makeFiles(name);
};
