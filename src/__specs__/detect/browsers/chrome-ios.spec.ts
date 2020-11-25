import { browsers, testNavigatorList } from '../../fixtures';
import { isChromeIOS } from '../../../detect/browsers/chrome-ios';

describe('detect Google Chrome browser on iOS', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isChromeIOS,
			versions: browsers.GoogleChromeIOS,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isChromeIOS,
			versions: browsers.GoogleChrome,
			validCase: false
		});
	});
});
