import { testNavigators } from '../../fixtures/navigators';
import { invalidTestCases, validTestCases } from '../../fixtures/test-cases';
import { isMobile } from '../../../detect/device/mobile';

describe('Detect device isMobile', () => {
	validTestCases(
		[isMobile],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile
		]
	);
	invalidTestCases(
		[isMobile],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Desktop
		]
	);
});
