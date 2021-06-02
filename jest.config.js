module.exports = {
  testEnvironment: 'jsdom',
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'gql', 'graphql'],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
    "\\.(gql|graphql)$": ["@jagi/jest-transform-graphql"],
  },
};
