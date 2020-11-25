import { browsers, testNavigatorList } from '../../fixtures';
import { isOpera } from '../../../detect/browsers/opera';

describe('detect Opera browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isOpera,
			versions: browsers.Opera,
			validCase: true
		});
	});
	describe('Invalid cases: pack #1. Chrome', () => {
		testNavigatorList({
			detect: isOpera,
			versions: browsers.GoogleChrome,
			validCase: false
		});
	});
});
