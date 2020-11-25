import { browsers, testNavigatorList } from '../../fixtures';
import { isVivaldi } from '../../../detect/browsers/vivaldi';

describe('detect Vivaldi browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isVivaldi,
			versions: browsers.Vivaldi,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isVivaldi,
			versions: browsers.Chrome,
			validCase: false
		});
	});
});
