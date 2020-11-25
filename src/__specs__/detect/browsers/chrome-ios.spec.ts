import { browsers, testNavigatorList } from '../../fixtures';
import { isChromeIOS } from '../../../detect/browsers/chrome-ios';

describe('detect Google Chrome browser on iOS', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isChromeIOS,
			versions: browsers.ChromeIOS,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isChromeIOS,
			versions: browsers.Chrome,
			validCase: false
		});
	});
});
