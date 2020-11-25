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
	Edge: {
		v40: {
			WindowsMobile: {
				'Edge (Standard)': [
					'Mozilla/5.0 (Windows Mobile 10; Android 10.0; Microsoft; Lumia 950XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 Edge/40.15254.603'
				]
			}
		},
		v44: {
			Xbox: {
				'Edge (Standard)': [
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edge/44.18363.8131'
				]
			}
		},
		v87: {
			Windows10: {
				'Edge (Standard)': [
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.47'
				]
			},
			macOS: {
				'Edge (Standard)': [
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.47'
				]
			}
		}
	},
	EdgeAndroid: {
		v45: {
			Android: {
				'Edge (Standard)': [
					'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088',
					'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088',
					'Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088',
					'Mozilla/5.0 (Linux; Android 10; ONEPLUS A6003) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 EdgA/45.10.4.5088'
				]
			}
		}
	},
	EdgeIOS: {
		v45: {
			iOS: {
				'Chrome on iPhone': [
					'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 EdgiOS/45.11.1 Mobile/15E148 Safari/605.1.15'
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
	GoogleChromeIOS: {
		v87: {
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
			}
		}
	},
	InternetExplorer: {
		v8: {
			WindowsXP: {
				'Internet Explorer': [
					'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)'
				]
			},
			WindowsVista: {
				'Internet Explorer': [
					'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0;)'
				]
			},
			Windows7: {
				'Internet Explorer': [
					'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)'
				]
			}
		},
		v9: {
			WindowsVista: {
				'Internet Explorer': [
					'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0)'
				]
			},
			Windows7: {
				'Internet Explorer': [
					'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)'
				]
			}
		},
		v10: {
			Windows7: {
				'Internet Explorer': [
					'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)'
				]
			},
			Windows8: {
				'Internet Explorer': [
					'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)'
				]
			}
		},
		v11: {
			Windows7: {
				'Internet Explorer': [
					'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko'
				]
			},
			Windows8: {
				'Internet Explorer': [
					'Mozilla/5.0 (Windows NT 6.2; Trident/7.0; rv:11.0) like Gecko'
				]
			},
			'Windows8.1': {
				'Internet Explorer': [
					'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
				]
			},
			Windows10: {
				'Internet Explorer': [
					'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko'
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
			Android: {
				'Firefox (Standard)': [
					'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/83.0'
				],
				'Firefox on Lg': [
					'Mozilla/5.0 (Android 11; Mobile; LG-M255; rv:83.0) Gecko/83.0 Firefox/83.0'
				]
			}
		}
	},
	MozillaFirefoxIOS: {
		v29: {
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
			}
		}
	},
	Opera: {
		v59: {
			Android: {
				'Opera on Huawei': [
					'Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 OPR/59.1.2926.54067'
				],
				'Opera on Sumsung': [
					'Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 OPR/59.1.2926.54067',
					'Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Mobile Safari/537.36 OPR/59.1.2926.54067'
				]
			}
		},
		v72: {
			Windows: {
				'Opera (Standard)': [
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378',
					'Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378'
				]
			},
			macOS: {
				'Opera (Standard)': [
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378'
				]
			},
			Linux: {
				'Opera (Standard)': [
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 OPR/72.0.3815.378'
				]
			}
		}
	}
};
