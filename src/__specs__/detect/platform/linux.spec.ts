import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isLinux } from '../../../detect/platform/linux';

describe('Detect platform isLinux', () => {
	validTestCases(
		[isLinux],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile,
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Desktop
		]
	);
});
