import { isChromeIOSVersion } from '../../../detect/browsers/chrome-ios-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList } from '../../fixtures';

describe('detect Google Chrome browser version on iOS', () => {
	describe('86 >=', () => {
		testNavigatorList({
			detect: isChromeIOSVersion(MORE_THEN_OR_EQUAL, 86),
			versions: browsers.ChromeIOS,
			validCase: true
		});
	});
	describe('87 ==', () => {
		testNavigatorList({
			detect: isChromeIOSVersion(EQUAL, 87),
			versions: browsers.ChromeIOS,
			validCase: true
		});
	});
	describe('85 <=', () => {
		testNavigatorList({
			detect: isChromeIOSVersion(LESS_THEN_OR_EQUAL, 87),
			versions: browsers.ChromeIOS,
			validCase: true
		});
	});
});
