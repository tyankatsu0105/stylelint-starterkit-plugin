'use strict';

const fs = require('fs-extra');

const { TEMPLATE_PATH } = require('../utils/const');
const absolutePath = require('../utils/absolutePath');

const makeProjectDir = (name) => fs.mkdirs(name);

const copyDirectory = (name) => {
  fs.copySync(TEMPLATE_PATH, name);
};

const updatePackageJson = async (packagePath, obj) => {
  let oldPkg = await fs.readFile(packagePath, 'utf-8');
  oldPkg = JSON.parse(oldPkg);

  const newPkg = Object.assign(oldPkg, obj);

  await fs.outputFile(packagePath, JSON.stringify(newPkg, null, 2));
};

module.exports = async (response) => {
  const { name } = response;
  const dir = absolutePath(name);

  await makeProjectDir(name);
  await copyDirectory(name);

  await updatePackageJson(`${dir}/package.json`, {
    name
  });
};
