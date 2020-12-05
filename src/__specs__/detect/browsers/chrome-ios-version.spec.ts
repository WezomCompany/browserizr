import { isChromeIOSVersion } from '../../../detect/browsers/chrome-ios-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';

describe('Detect Google Chrome browser version on iOS', () => {
	describe('87', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isChromeIOSVersion(MORE_THEN_OR_EQUAL, 87),
				versions: { ...browsers.ChromeIOS },
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isChromeIOSVersion(EQUAL, 87),
				version: browsers.ChromeIOS.v87,
				name: 'v87',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isChromeIOSVersion(LESS_THEN_OR_EQUAL, 87),
				versions: { ...browsers.ChromeIOS },
				validCase: true
			});
		});
	});
});
