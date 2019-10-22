const prompt = require('./prompt');
const files = require('./files');

(async () => {
  const { response } = await prompt();
  files(response);
})();
