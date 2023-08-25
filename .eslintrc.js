module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    bracketSpacing: 0,
    'react-hooks/exhaustive-deps': 0,
    'no-catch-shadow': 0,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        'no-inline-styles': false,
      },
    ],
    'react-native/no-inline-styles': 0,
  },
};
