import { browsers, testNavigatorList } from '../../fixtures';
import { isFirefox } from '../../../detect/browsers/firefox';

describe('detect Mozilla Firefox browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isFirefox,
			versions: browsers.Firefox,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isFirefox,
			versions: browsers.FirefoxIOS,
			validCase: false
		});
	});
});