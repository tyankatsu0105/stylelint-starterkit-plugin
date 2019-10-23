const { utils } = require('stylelint');
const { namespace } = require('../../utils');

const ruleName = namespace('sample-rule');

const messages = utils.ruleMessages(ruleName, {
  expected: 'Should single quotation'
});

const rule = function(actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    root.walkDecls(/^background/, (decl) => {
      const { value } = decl;

      if (!/"/.test(value)) {
        return;
      }

      utils.report({
        message: messages.expected,
        node: decl,
        result,
        ruleName
      });
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
