import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPad } from '../../../detect/devices/ipad';

describe('detect iPad device', () => {
	describe('Valid cases #1. Chrome iOS', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			browser: browsers.ChromeIOS.v87.iOS['Chrome on iPad'],
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Firefox iOS', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			browser: browsers.FirefoxIOS.v29.iOS['Firefox on iPad'],
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Safari', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			browser: browsers.Safari.v14.iOS['Safari on iPad'],
			validCase: true
		});
	});
	describe('Valid cases: pack #4. Yandex', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			browser: browsers.YandexOnIOS.v20.iOS['Yandex Browser on iPad'],
			validCase: true
		});
	});
});
