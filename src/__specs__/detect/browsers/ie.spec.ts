import { browsers, testNavigatorList } from '../../fixtures';
import { isIE } from '../../../detect/browsers/ie';

describe('detect Internet Explorer browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isIE,
			versions: browsers.InternetExplorer,
			validCase: true
		});
	});
});
