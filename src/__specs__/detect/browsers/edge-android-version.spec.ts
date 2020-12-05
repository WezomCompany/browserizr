import { isEdgeAndroidVersion } from '../../../detect/browsers/edge-android-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';

describe('Detect Microsoft Edge browser version on Android', () => {
	describe('45', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeAndroidVersion(MORE_THEN_OR_EQUAL, 45),
				versions: { ...browsers.EdgeAndroid },
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isEdgeAndroidVersion(EQUAL, 45),
				version: browsers.EdgeAndroid.v45,
				name: 'v45',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeAndroidVersion(LESS_THEN_OR_EQUAL, 45),
				versions: { ...browsers.EdgeAndroid },
				validCase: true
			});
		});
	});

	describe('Not isEdgeAndroidVersion', () => {
		testNavigatorListVersion({
			detect: isEdgeAndroidVersion(EQUAL, 87),
			version: browsers.Edge.v87,
			name: 'v87',
			validCase: false
		});
	});
});
