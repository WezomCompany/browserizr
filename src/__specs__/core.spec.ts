// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import browserizr from '../core';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('navigator.userAgent', () => {
	test('Should be an empty string in non-browser env', () => {
		let _ua = '';
		browserizr.detect((ua) => {
			_ua = ua;
			return false;
		});
		expect(_ua).toHaveLength(0);
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

describe('navigator.platform', () => {
	test('Should be an empty string in non-browser env', () => {
		let _platform = '';
		browserizr.detect((ua, platform) => {
			_platform = platform;
			return false;
		});
		expect(_platform).toHaveLength(0);
	});

	test('Should be a custom string', () => {
		let _platform = '';
		const customPlatform = 'XYZ';
		browserizr.setPlatform(customPlatform);
		browserizr.detect((ua, platform) => {
			_platform = platform;
			return false;
		});
		expect(_platform).toStrictEqual(customPlatform);
	});
});

describe('browserizr.classNames()', () => {
	test('Should return correct result', () => {
		const classNames = browserizr.classNames([
			{
				is: 'is-chrome',
				not: 'is-not-chrome',
				detect: () => true
			},
			{
				is: 'is-chrome',
				not: 'is-not-chrome',
				detect: () => false
			}
		]);
		expect(classNames).toStrictEqual(['is-chrome', 'is-not-chrome']);
	});
});
