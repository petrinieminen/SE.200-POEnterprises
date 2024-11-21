module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest', // Use Babel for JavaScript files
    },
    collectCoverageFrom: [
      'src/**/*.js',
      '!src/.internal/**', // Exclude the .internal directory
    ],
  };