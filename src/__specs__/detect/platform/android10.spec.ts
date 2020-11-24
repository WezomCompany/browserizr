import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isAndroid10 } from '../../../detect/platform/android-10';

describe('Detect platform isAndroid10', () => {
	validTestCases(
		[isAndroid10],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile
		]
	);
});
