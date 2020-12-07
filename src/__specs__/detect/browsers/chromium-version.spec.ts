import { browsers, testNavigatorListVersion } from '../../fixtures';
import { isChromiumVersion } from '../../../detect/browsers/chromium-version';
import { EQUAL } from '../../../utils';

describe('detect Chromium family browsers version', () => {
	describe('87', () => {
		testNavigatorListVersion({
			detect: isChromiumVersion(EQUAL, 87),
			version: browsers.Chrome.v87,
			name: 'Google Chrome 87',
			validCase: true
		});
	});

	describe('Not isChromium', () => {
		testNavigatorListVersion({
			detect: isChromiumVersion(EQUAL, 87),
			version: browsers.ChromeIOS.v87,
			name: 'v87',
			validCase: false
		});
	});
});
