module.exports = ({ compilerOptions }) => ({
	clearMocks: true,
	collectCoverage: true,
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	displayName: 'tsc',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'js', 'node'],
	transform: {
		'.ts': ['ts-jest']
	},
	globals: {
		'ts-jest': {
			tsconfig: {
				...compilerOptions
			}
		}
	}
});
