const typescript = require('rollup-plugin-typescript2');

/**
 * @param {string} input
 * @param {string} output
 * @return {{input: string, output: [{file: *, exports: string, format: string}], plugins: [*]}}
 */
module.exports = (input, output) => ({
	input,
	output: [
		{
			dir: output,
			format: 'cjs',
			exports: 'auto'
		}
	],
	preserveModules: true,
	plugins: [
		typescript({
			tsconfigOverride: {
				compilerOptions: { target: 'es5' }
			}
		}),
	]
});
