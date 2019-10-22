const rule = require('..');
const { ruleName, messages } = rule;

testRule(rule, {
  ruleName,
  config: [true],
  syntax: 'css',

  accept: [
    {
      code: `
      .bar {
        background: url('path/to/img.png');
        background-image: url('path/to/img.png');
      }
    `,
      description: 'Should single quotation'
    }
  ],

  reject: [
    {
      code: `
      .bar {
        background: url("path/to/img.jpg");
      }
    `,
      line: 3,
      message: messages.expected,
      description: 'Should single quotation'
    },
    {
      code: `
      .bar {
        background-image: url("path/to/img.jpg");
      }
    `,
      line: 3,
      message: messages.expected,
      description: 'Should single quotation'
    }
  ]
});
