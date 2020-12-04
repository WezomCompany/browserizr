import { isFirefoxVersion } from '../../../detect/browsers/firefox-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList } from '../../fixtures';

describe('detect Mozilla Firefox browser version', () => {
	describe('82 >=', () => {
		testNavigatorList({
			detect: isFirefoxVersion(MORE_THEN_OR_EQUAL, 82),
			versions: browsers.Firefox,
			validCase: true
		});
	});
	describe('83 ==', () => {
		testNavigatorList({
			detect: isFirefoxVersion(EQUAL, 83),
			versions: browsers.Firefox,
			validCase: true
		});
	});
	describe('81 <=', () => {
		testNavigatorList({
			detect: isFirefoxVersion(LESS_THEN_OR_EQUAL, 83),
			versions: browsers.Firefox,
			validCase: true
		});
	});
	describe('Invalid result', () => {
		testNavigatorList({
			detect: isFirefoxVersion(LESS_THEN_OR_EQUAL, 87),
			versions: browsers.Chrome,
			validCase: false
		});
	});
});
