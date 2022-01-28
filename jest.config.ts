export default {
  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'test/coverage',
  coveragePathIgnorePatterns: [
    'node_modules',
    'docs',
    'dist',
    'examples',
    'test/temporary'
  ],

  coverageProvider: 'v8',

  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },

  rootDir: '.',

  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testPathIgnorePatterns: [
    'node_modules',
    'docs',
    'dist',
    'examples',
    'test/temporary',
    'src'
  ]
}
