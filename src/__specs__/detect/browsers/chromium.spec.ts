import { browsers, testNavigatorList } from '../../fixtures';
import { isChromium } from '../../../detect/browsers/chromium';

describe('detect Chromium family browsers', () => {
	describe('Valid cases #1. Chrome', () => {
		testNavigatorList({
			detect: isChromium,
			versions: browsers.Chrome,
			validCase: true
		});
	});
	describe('Valid cases: pack #2. Edge', () => {
		testNavigatorList({
			detect: isChromium,
			versions: browsers.Edge,
			validCase: true
		});
	});
	describe('Valid cases: pack #3. Edge Android', () => {
		testNavigatorList({
			detect: isChromium,
			versions: browsers.EdgeAndroid,
			validCase: true
		});
	});
	describe('Valid cases: pack #4. Opera', () => {
		testNavigatorList({
			detect: isChromium,
			versions: browsers.Opera,
			validCase: true
		});
	});
	describe('Valid cases: pack #5. Vivaldi', () => {
		testNavigatorList({
			detect: isChromium,
			versions: browsers.Vivaldi,
			validCase: true
		});
	});
});
