module.exports = {
  // Base configuration for all tests
  projects: [
    // Server-side tests configuration
    {
      displayName: 'server',
      testEnvironment: 'node',
      roots: ['<rootDir>/server/tests'], // points to your server tests folder
      testMatch: ['**/*.test.js'],       // matches all .test.js files in server/tests
      moduleFileExtensions: ['js', 'json', 'node'],
      setupFilesAfterEnv: ['<rootDir>/server/tests/setup.js'], // optional server setup file
      coverageDirectory: '<rootDir>/coverage/server',
      collectCoverageFrom: [
        'server/src/**/*.js',       // collect coverage from source files
        '!server/src/config/**',    // ignore config folder
        '!**/node_modules/**',
      ],
    },

    // Client-side tests configuration (commented out for now)
    // {
    //   displayName: 'client',
    //   testEnvironment: 'jsdom',
    //   roots: ['<rootDir>/client/src'],
    //   testMatch: ['**/*.test.{js,jsx}'],
    //   moduleFileExtensions: ['js', 'jsx', 'json'],
    //   moduleNameMapper: {
    //     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    //     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/client/src/tests/__mocks__/fileMock.js',
    //   },
    //   setupFilesAfterEnv: ['<rootDir>/client/src/tests/setup.js'],
    //   transform: {
    //     '^.+\\.(js|jsx)$': 'babel-jest',
    //   },
    //   coverageDirectory: '<rootDir>/coverage/client',
    //   collectCoverageFrom: [
    //     'client/src/**/*.{js,jsx}',
    //     '!client/src/index.js',
    //     '!**/node_modules/**',
    //   ],
    // },
  ],

  // Global configuration
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
  testTimeout: 10000,
};
