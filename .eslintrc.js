module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/forbid-prop-types': [0, { forbid: [] }],
    'import/extensions': [1, 'never', { svg: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "no-underscore-dangle": ["error", { "allow": ["_embedded"] }],
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "no-use-before-define": ["error", { "variables": false }],
  },
  env: {
    jest: true,
  },
};
