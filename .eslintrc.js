module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
