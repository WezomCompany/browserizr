import { browsers, testNavigatorList } from '../../fixtures';
import { isOpera } from '../../../detect/browsers/opera';

describe('Detect Opera browser', () => {
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
			versions: browsers.Chrome,
			validCase: false
		});
	});
});
