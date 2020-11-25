import browserizr, { DetectMethod } from '../core';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface NavigatorList {
	[version: string]: {
		[platform: string]: {
			[browser: string]: string[];
		};
	};
}

// -----------------------------------------------------------------------------
// Test Helpers
// -----------------------------------------------------------------------------

export const testNavigatorList = ({
	versions,
	detect,
	validCase
}: {
	versions: NavigatorList;
	detect: DetectMethod;
	validCase: boolean;
}) => {
	for (const version in versions) {
		if (versions.hasOwnProperty(version)) {
			describe(`version: ${version}`, () => {
				const platforms = versions[version];
				for (const platform in platforms) {
					if (platforms.hasOwnProperty(platform)) {
						describe(`platform: ${platform}`, () => {
							const browsers = platforms[platform];
							for (const browser in browsers) {
								if (browsers.hasOwnProperty(browser)) {
									describe(`browser: ${browser}`, () => {
										browsers[browser].forEach((ua, i) => {
											test(`userAgent #${++i}`, () => {
												browserizr.setUA(ua);
												const result = browserizr.detect(detect);
												expect(result).toStrictEqual(validCase);
											});
										});
									});
								}
							}
						});
					}
				}
			});
		}
	}
};

// -----------------------------------------------------------------------------
// User Agent collection
// -----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/camelcase */
export const browsers = {
	AppleSafari: {
		v14: {
			macOS: {
				'Safari (Standard)': [
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15'
				]
			},
			iOS: {
				'Safari on iPhone': [
					'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
				],
				'Safari on iPad': [
					'Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
				],
				'Safari on iPod': [
					'Mozilla/5.0 (iPod touch; CPU iPhone 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
				]
			}
		}
	},
	GoogleChrome: {
		v87: {
			Windows: {
				'Chrome (Standard)': [
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
					'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
					'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
				]
			},
			macOS: {
				'Chrome (Standard)': [
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
				]
			},
			Linux: {
				'Chrome (Standard)': [
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
				]
			},
			iOS: {
				'Chrome on iPhone': [
					'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
				],
				'Chrome on iPad': [
					'Mozilla/5.0 (iPad; CPU OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
				],
				'Chrome on iPod': [
					'Mozilla/5.0 (iPod; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
				]
			},
			Android: {
				'Chrome (Standard)': [
					'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36'
				],
				'Chrome on Samsung': [
					'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
					'Mozilla/5.0 (Linux; Android 10; SM-A102U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
					'Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
					'Mozilla/5.0 (Linux; Android 10; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36'
				],
				'Chrome on Lg': [
					'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
					'Mozilla/5.0 (Linux; Android 10; LM-X420) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36',
					'Mozilla/5.0 (Linux; Android 10; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36'
				]
			}
		}
	},
	MozillaFirefox: {
		v83: {
			Windows: {
				'Firefox (Standard)': [
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0'
				]
			},
			macOS: {
				'Firefox (Standard)': [
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 11.0; rv:83.0) Gecko/20100101 Firefox/83.0'
				]
			},
			Linux: {
				'Firefox (Standard)': [
					'Mozilla/5.0 (X11; Linux i686; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0',
					'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0'
				]
			},
			iOS: {
				'Firefox on iPhone': [
					'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15'
				],
				'Firefox on iPad': [
					'Mozilla/5.0 (iPad; CPU OS 11_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15'
				],
				'Firefox on iPod': [
					'Mozilla/5.0 (iPod touch; CPU iPhone OS 11_0_1 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) FxiOS/29.0 Mobile/15E148 Safari/605.1.15'
				]
			},
			Android: {
				'Firefox (Standard)': [
					'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/83.0'
				],
				'Firefox on Lg': [
					'Mozilla/5.0 (Android 11; Mobile; LG-M255; rv:83.0) Gecko/83.0 Firefox/83.0'
				]
			}
		}
	}
};
