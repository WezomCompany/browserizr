import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPhone } from '../../../detect/devices/iphone';

describe('Detect iPhone device', () => {
	describe('Valid cases #1. Chrome iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			name: 'Chrome on iPhone',
			browser: browsers.ChromeIOS.v87.iOS['Chrome on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Firefox iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			name: 'Firefox on iPhone',
			browser: browsers.FirefoxIOS.v29.iOS['Firefox on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Safari iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			name: 'Safari on iPhone',
			browser: browsers.Safari.v14.iOS['Safari on iPhone'],
			validCase: true
		});
	});
});
