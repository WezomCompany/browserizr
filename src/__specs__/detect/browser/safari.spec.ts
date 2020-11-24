import { testNavigators } from '../../fixtures/navigators';
import { invalidTestCases } from '../../fixtures/test-cases';
import { isSafari } from '../../../detect/browser/safari';

describe('Detect browser isSafari', () => {
	invalidTestCases(
		[isSafari],
		[
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Mobile,
			testNavigators.Phones.OnePlus_7T_Pro_Android10_HD1910_OxygenOS_10
				.GoogleChrome_v85.Desktop,
			testNavigators.PC.Windows10.GoogleChrome_v86.Original
		]
	);
});
