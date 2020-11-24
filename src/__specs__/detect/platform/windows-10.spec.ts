import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isWindows10 } from '../../../detect/platform/windows-10';

describe('Detect platform isWindows10', () => {
	validTestCases(
		[isWindows10],
		[
			testNavigators.PC.Windows10.GoogleChrome_v86.Original,
			testNavigators.PC.Windows10.MozillaFirefox_v83.Original
		]
	);
});
