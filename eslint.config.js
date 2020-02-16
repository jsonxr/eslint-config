const config = require('@react-native-community/eslint-config');
module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'no-console': 'warn',
  },
};
