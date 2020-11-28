import { isChromeVersion } from '../../../detect/browsers/chrome-version';
import { browsers, testNavigatorList } from '../../fixtures';

describe('detect Google Chrome browser version', () => {
	describe('86 >=', () => {
		testNavigatorList({
			detect: isChromeVersion(86, '>='),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('87 >=', () => {
		testNavigatorList({
			detect: isChromeVersion(87, '=='),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('87 <=', () => {
		testNavigatorList({
			detect: isChromeVersion(87, '<='),
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('Invalid result', () => {
		testNavigatorList({
			detect: isChromeVersion(87, '<='),
			versions: browsers.Firefox,
			validCase: false
		});
	});
});
