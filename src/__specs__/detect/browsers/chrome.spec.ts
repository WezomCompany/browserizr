import { browsers, testNavigatorList } from '../../fixtures';
import { isChrome } from '../../../detect/browsers/chrome';

describe('detect Google Chrome browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('Invalid cases: pack #1. Chrome iOS', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.ChromeIOS,
			validCase: false
		});
	});
	describe('Invalid cases: pack #2. Edge', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.Edge,
			validCase: false
		});
	});
	describe('Invalid cases: pack #3. Safari', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.Safari,
			validCase: false
		});
	});
	describe('Invalid cases: pack #4. Opera', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.Opera,
			validCase: false
		});
	});
});
