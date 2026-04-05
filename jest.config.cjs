/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    collectCoverageFrom: [
        'src/utils/**/*.js',
        'src/components/**/*.jsx',
        '!src/**/*.test.{js,jsx}',
        '!src/main.jsx',
        '!src/App.jsx',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
    coverageThreshold: {
        './src/utils/': {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
        './src/components/': {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        },
    },
};
