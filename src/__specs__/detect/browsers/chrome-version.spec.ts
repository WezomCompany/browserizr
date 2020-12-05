import { isChromeVersion } from '../../../detect/browsers/chrome-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';

describe('detect Google Chrome browser version', () => {
	describe('87', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isChromeVersion(MORE_THEN_OR_EQUAL, 87),
				versions: { ...browsers.Chrome },
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isChromeVersion(EQUAL, 87),
				version: browsers.Chrome.v87,
				name: 'v87',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isChromeVersion(LESS_THEN_OR_EQUAL, 87),
				versions: { ...browsers.Chrome },
				validCase: true
			});
		});
	});

	describe('Not isChrome', () => {
		testNavigatorListVersion({
			detect: isChromeVersion(EQUAL, 87),
			version: browsers.ChromeIOS.v87,
			name: 'v87',
			validCase: false
		});
	});
});
