import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isWindows } from '../../../detect/platform/windows';

describe('Detect platform isWindows', () => {
	validTestCases(
		[isWindows],
		[
			testNavigators.PC.Windows10.GoogleChrome_v86.Original,
			testNavigators.PC.Windows10.MozillaFirefox_v83.Original
		]
	);
});
