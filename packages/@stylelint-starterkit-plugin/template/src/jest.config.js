module.exports = {
  setupFiles: ['./jest-setup.js'],
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.js$|rules/.*/test/.*\\.js$',
  transformIgnorePatterns: ['/node_modules/']
};
