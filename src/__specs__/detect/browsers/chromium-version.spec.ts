import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';
import { isChromiumVersion } from '../../../detect/browsers/chromium-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';

describe('detect Chromium family browsers version', () => {
	describe('87', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isChromiumVersion(MORE_THEN_OR_EQUAL, 87),
				versions: { ...browsers.Chrome },
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isChromiumVersion(EQUAL, 87),
				version: browsers.Chrome.v87,
				name: 'Google Chrome v87',
				validCase: true
			});
			testNavigatorListVersion({
				detect: isChromiumVersion(EQUAL, 87),
				version: browsers.Edge.v87,
				name: 'Microsoft Edge v87',
				validCase: true
			});
			testNavigatorListVersion({
				detect: isChromiumVersion(EQUAL, 87),
				version: browsers.EdgeAndroid.v45,
				name: 'Microsoft Edge Android v45',
				validCase: true
			});
			testNavigatorListVersion({
				detect: isChromiumVersion(EQUAL, 87),
				version: browsers.Opera.v72,
				name: 'Opera v72',
				validCase: true
			});
			testNavigatorListVersion({
				detect: isChromiumVersion(EQUAL, 87),
				version: browsers.Vivaldi.v3,
				name: 'Vivaldi v3',
				validCase: true
			});
			testNavigatorListVersion({
				detect: isChromiumVersion(EQUAL, 87),
				version: browsers.Yandex.v20,
				name: 'Yandex v20',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isChromiumVersion(LESS_THEN_OR_EQUAL, 87),
				versions: { ...browsers.Chrome },
				validCase: true
			});
		});
	});

	describe('Not isChromium', () => {
		testNavigatorListVersion({
			detect: isChromiumVersion(EQUAL, 87),
			version: browsers.ChromeIOS.v87,
			name: 'v87',
			validCase: false
		});
	});
});
