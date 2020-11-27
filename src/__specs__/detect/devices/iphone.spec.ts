import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPhone } from '../../../detect/devices/iphone';

describe('detect iPhone device', () => {
	describe('Valid cases #1. Chrome iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			browser: browsers.ChromeIOS.v87.iOS['Chrome on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Firefox iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			browser: browsers.FirefoxIOS.v29.iOS['Firefox on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Safari', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			browser: browsers.Safari.v14.iOS['Safari on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #4. Yandex', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			browser: browsers.YandexOnIOS.v20.iOS['Yandex Browser on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #5. Firefox', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			browser: browsers.EdgeIOS.v45.iOS['Edge on iPhone'],
			validCase: true
		});
	});
});
