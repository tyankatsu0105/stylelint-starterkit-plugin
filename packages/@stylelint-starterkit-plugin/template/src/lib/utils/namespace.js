const { PLUGIN_NAME } = require('./const');

module.exports = function(ruleName) {
  return `${PLUGIN_NAME}/${ruleName}`;
};
