module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest', // Use Babel to transform JavaScript files
    },
    collectCoverage: true, // Enable coverage collection
    collectCoverageFrom: [
      'src/**/*.js', // Include all .js files in src/
      '!src/.internal/**', // Exclude the .internal directory
      '!src/**/index.js', // Optionally exclude index files
    ],
    coverageDirectory: 'coverage', // Output coverage reports to the "coverage" folder
    coverageReporters: ['text', 'lcov'], // Generate both text and lcov reports
    testEnvironment: 'node', // Use Node.js environment for tests
  };