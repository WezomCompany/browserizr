import { browsers, testNavigatorList } from '../../fixtures';
import { isChrome } from '../../../detect/browsers/chrome';

describe('detect Google Chrome browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.GoogleChrome,
			validCase: true
		});
	});
});
