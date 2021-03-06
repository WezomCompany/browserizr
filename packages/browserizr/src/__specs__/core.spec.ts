// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import browserizr from '../index';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('navigator.userAgent', () => {
	test('Arg `ua` should be stored same as `navigator.userAgent`', () => {
		let _ua = 'xXx';
		browserizr.detect((ua) => {
			_ua = ua;
			return false;
		});
		expect(_ua).toStrictEqual(navigator.userAgent);
	});

	test('Should be a custom string', () => {
		let _ua = '';
		const customUserAgent = 'XYZ';
		browserizr.setUA(customUserAgent);
		browserizr.detect((ua) => {
			_ua = ua;
			return false;
		});
		expect(_ua).toStrictEqual(customUserAgent);
	});
});

describe('browserizr.classNames()', () => {
	test('Should return correct result', () => {
		const classNames = browserizr.classNames([
			{
				is: 'is-chrome',
				not: 'is-not-chrome',
				fn: () => true
			},
			{
				is: 'is-chrome',
				not: 'is-not-chrome',
				fn: () => false
			}
		]);
		expect(classNames).toStrictEqual(['is-chrome', 'is-not-chrome']);
	});
});
