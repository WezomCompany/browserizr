module.exports = {
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/__specs__/'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.cache/'],
	displayName: 'tsc',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'node'],
	transform: {
		'\\.ts': ['ts-jest']
	}
};
