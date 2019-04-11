/* eslint-disable no-undef */
module.exports = {
  rootDir: __dirname,
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  coverageDirectory: '<rootDir>/config/tests/coverage',
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**', '!src/main.js']
};
