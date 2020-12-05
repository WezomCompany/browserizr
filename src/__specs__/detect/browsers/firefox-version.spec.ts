import { isFirefoxVersion } from '../../../detect/browsers/firefox-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';

describe('detect Mozilla Firefox browser version', () => {
	describe('83', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isFirefoxVersion(MORE_THEN_OR_EQUAL, 83),
				versions: { ...browsers.Firefox },
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isFirefoxVersion(EQUAL, 83),
				version: browsers.Firefox.v83,
				name: 'v83',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isFirefoxVersion(LESS_THEN_OR_EQUAL, 83),
				versions: { ...browsers.Firefox },
				validCase: true
			});
		});
	});
});
