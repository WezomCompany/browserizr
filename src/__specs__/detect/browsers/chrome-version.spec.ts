import { isChromeVersion } from '../../../detect/browsers/chrome-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList } from '../../fixtures';

describe('detect Google Chrome browser version', () => {
	describe('86 >=', () => {
		testNavigatorList({
			detect: isChromeVersion(MORE_THEN_OR_EQUAL, 86),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('87 ==', () => {
		testNavigatorList({
			detect: isChromeVersion(EQUAL, 87),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('85 <=', () => {
		testNavigatorList({
			detect: isChromeVersion(LESS_THEN_OR_EQUAL, 87),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('Invalid result', () => {
		testNavigatorList({
			detect: isChromeVersion(LESS_THEN_OR_EQUAL, 87),
			versions: browsers.Firefox,
			validCase: false
		});
	});
});
