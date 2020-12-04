import { isChromeVersion } from '../../../detect/browsers/chrome-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList } from '../../fixtures';

describe('detect Google Chrome browser version', () => {
	describe('86 >=', () => {
		testNavigatorList({
			detect: isChromeVersion(86, MORE_THEN_OR_EQUAL),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('87 ==', () => {
		testNavigatorList({
			detect: isChromeVersion(87, EQUAL),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('87 <=', () => {
		testNavigatorList({
			detect: isChromeVersion(87, LESS_THEN_OR_EQUAL),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('Invalid result', () => {
		testNavigatorList({
			detect: isChromeVersion(87, LESS_THEN_OR_EQUAL),
			versions: browsers.Firefox,
			validCase: false
		});
	});
});
