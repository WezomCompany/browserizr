import { browsers, testNavigatorList } from '../../fixtures';
import { isFirefoxIOS } from '../../../detect/browsers/firefox-ios';

describe('detect Mozilla Firefox browser on iOS', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isFirefoxIOS,
			versions: browsers.MozillaFirefoxIOS,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isFirefoxIOS,
			versions: browsers.MozillaFirefox,
			validCase: false
		});
	});
});
