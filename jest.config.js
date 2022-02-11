module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    collectCoverage: false,
    // collectCoverageFrom: [
    //   "src/**/*.tsx",
    //   "!src/**/*.spec.{tsx}",
    //   "!src/**/_app.tsx",
    //   "!src/**/_document.tsx"
    // ],
    // coverageReporters: ["json", "lcov"],
    testEnvironment: 'jsdom',
    allowSyntheticDefaultImports: true,
    esModuleInterop: true
  };