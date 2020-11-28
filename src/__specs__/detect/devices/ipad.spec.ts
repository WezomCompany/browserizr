import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPad } from '../../../detect/devices/ipad';

describe('detect iPad device', () => {
	describe('Valid cases #1. Chrome iOS 87', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			name: 'Chrome on iPad',
			browser: browsers.ChromeIOS.v87.iOS['Chrome on iPad'],
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Firefox iOS 29', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			name: 'Firefox on iPad',
			browser: browsers.FirefoxIOS.v29.iOS['Firefox on iPad'],
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Safari iOS', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			name: 'Safari on iPad',
			browser: browsers.Safari.v14.iOS['Safari on iPad'],
			validCase: true
		});
	});
	describe('Valid cases: pack #4. Yandex on iOS', () => {
		testNavigatorListBrowser({
			detect: isIPad,
			name: 'Yandex Browser on iPad',
			browser: browsers.YandexOnIOS.v20.iOS['Yandex Browser on iPad'],
			validCase: true
		});
	});
});
