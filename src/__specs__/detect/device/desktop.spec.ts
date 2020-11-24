import { testNavigators } from '../../fixtures/navigators';
import { invalidTestCases, validTestCases } from '../../fixtures/test-cases';
import { isDesktop } from '../../../detect/device/desktop';

describe('Detect device isDesktop', () => {
	validTestCases(
		[isDesktop],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Desktop
		]
	);
	invalidTestCases(
		[isDesktop],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile
		]
	);
});
