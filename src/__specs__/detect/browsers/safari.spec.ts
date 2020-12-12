import { browsers, testNavigatorList } from '../../fixtures';
import { isSafari } from '../../../detect/browsers/safari';

describe('Detect Apple Safari browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isSafari,
			versions: browsers.Safari,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isSafari,
			versions: browsers.Chrome,
			validCase: false
		});
	});
});
