import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPod } from '../../../detect/devices/ipod';

describe('detect isIPod device', () => {
	describe('Valid cases #1. Chrome iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			browser: browsers.ChromeIOS.v87.iOS['Chrome on iPod'],
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Firefox iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			browser: browsers.FirefoxIOS.v29.iOS['Firefox on iPod'],
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Safari iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			browser: browsers.Safari.v14.iOS['Safari on iPod'],
			validCase: true
		});
	});
	describe('Valid cases: pack #4. Yandex on iOS', () => {
		testNavigatorListBrowser({
			detect: isIPod,
			browser: browsers.YandexOnIOS.v20.iOS['Yandex Browser on iPod'],
			validCase: true
		});
	});
});
