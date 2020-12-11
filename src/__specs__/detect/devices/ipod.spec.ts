import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPod } from '../../../detect/devices/ipod';

describe('detect isIPod device', () => {
	describe('Valid cases #1. Chrome iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			name: 'Chrome on iPod',
			browser: browsers.ChromeIOS.v87.iOS['Chrome on iPod'],
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Firefox iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			name: 'Firefox on iPod',
			browser: browsers.FirefoxIOS.v29.iOS['Firefox on iPod'],
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Safari iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			name: 'Safari on iPod',
			browser: browsers.Safari.v14.iOS['Safari on iPod'],
			validCase: true
		});
	});
});
