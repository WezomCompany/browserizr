import { isEdgeIOSVersion } from '../../../detect/browsers/edge-ios-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';

describe('Detect Microsoft Edge browser version on iOS', () => {
	describe('45', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeIOSVersion(MORE_THEN_OR_EQUAL, 45),
				versions: { ...browsers.EdgeIOS },
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isEdgeIOSVersion(EQUAL, 45),
				version: browsers.EdgeIOS.v45,
				name: 'v45',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeIOSVersion(LESS_THEN_OR_EQUAL, 45),
				versions: { ...browsers.EdgeIOS },
				validCase: true
			});
		});
	});
});
