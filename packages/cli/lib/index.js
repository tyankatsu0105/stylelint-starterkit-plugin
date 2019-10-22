const prompt = require('./prompt');

(async () => {
  const { response } = await prompt();
  console.log(response);
})();
