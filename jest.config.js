module.exports = {
  testEnvironment: 'jsdom',
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'gql', 'graphql'],
  maxWorkers: 2,
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
    "\\.(gql|graphql)$": ["@jagi/jest-transform-graphql"],
  },
};
