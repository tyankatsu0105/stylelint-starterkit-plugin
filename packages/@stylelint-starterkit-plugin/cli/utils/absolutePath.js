const path = require('path');

module.exports = (string) => {
  if (path.isAbsolute(string)) return string;

  return path.join(process.cwd(), string);
};
