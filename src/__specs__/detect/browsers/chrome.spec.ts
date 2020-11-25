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
	describe('Invalid cases: pack #1. Chrome iOS', () => {
		testNavigatorList({
			detect: isChrome,
			versions: browsers.GoogleChromeIOS,
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
});
