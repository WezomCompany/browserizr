import { testNavigators } from '../../fixtures/navigators';
import { validTestCases } from '../../fixtures/test-cases';
import { isFirefox } from '../../../detect/browser/firefox';

describe('Detect browser isFirefox', () => {
	validTestCases(
		[isFirefox],
		[testNavigators.PC.Windows10.MozillaFirefox_v83.Original]
	);
});
