import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isChrome } from '../../../detect/browser/chrome';

describe('Detect browser isChrome', () => {
	validTestCases(
		[isChrome],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile,
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Desktop,
			testNavigators.PC.Windows10.GoogleChrome_v86.Original
		]
	);
});
