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

const updateFile = async (filePath, regex, replacer) => {
  const oldContent = await fs.readFile(filePath, 'utf-8');
  const newContent = String(oldContent).replace(regex, replacer);

  await fs.outputFile(filePath, newContent);
};

module.exports = async (response) => {
  const { name } = response;
  const updateTarget = {
    packageJson: `${absolutePath(name)}/package.json`,
    readme: `${absolutePath(name)}/README.md`
  };

  await makeProjectDir(name);
  await copyDirectory(name);

  await updatePackageJson(updateTarget.packageJson, {
    name
  });
  await updateFile(
    updateTarget.readme,
    /__generated-template-readme-title__/,
    name
  );
};
