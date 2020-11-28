import { browsers, testNavigatorListBrowser } from '../../fixtures';
import { isIPhone } from '../../../detect/devices/iphone';

describe('detect iPhone device', () => {
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
	describe('Valid cases: pack #4. Yandex on iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			name: 'Yandex Browser on iPhone',
			browser: browsers.YandexOnIOS.v20.iOS['Yandex Browser on iPhone'],
			validCase: true
		});
	});
	describe('Valid cases: pack #5. Edge iOS', () => {
		testNavigatorListBrowser({
			detect: isIPhone,
			name: 'Edge on iPhone',
			browser: browsers.EdgeIOS.v45.iOS['Edge on iPhone'],
			validCase: true
		});
	});
});
