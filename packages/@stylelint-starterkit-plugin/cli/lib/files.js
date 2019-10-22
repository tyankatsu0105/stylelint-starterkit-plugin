'use strict';

const fs = require('fs-extra');

const { TEMPLATE_PATH } = require('../utils/const');

const makeProjectDir = (name) => fs.mkdirs(name);

const makeFiles = (name) => {
  fs.copy(TEMPLATE_PATH, name);
};

module.exports = async (response) => {
  const { name } = response;

  await makeProjectDir(name);
  await makeFiles(name);
};
