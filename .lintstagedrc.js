module.exports = {
  '*.{js,ts,tsx}': (filenames) => [
    'tsc',
    `eslint ${filenames.join(' ')}`,
    `prettier ${filenames.join(' ')}`,
  ],
};
