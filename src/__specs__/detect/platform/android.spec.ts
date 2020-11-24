import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isAndroid } from '../../../detect/platform/android';

describe('Detect platform isAndroid', () => {
	validTestCases(
		[isAndroid],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile
		]
	);
});
