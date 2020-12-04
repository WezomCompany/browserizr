import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { isIEVersion } from '../../../detect/browsers/ie-version';

describe('detect Internet Explorer browser version', () => {
	describe('8', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(MORE_THEN_OR_EQUAL, 8),
				versions: browsers.InternetExplorer,
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isIEVersion(EQUAL, 8),
				version: browsers.InternetExplorer.v8,
				name: 'v8',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(LESS_THEN_OR_EQUAL, 8),
				versions: {
					...browsers.InternetExplorer,
					v9: null,
					v10: null,
					v11: null
				},
				validCase: true
			});
		});
	});

	describe('9', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(MORE_THEN_OR_EQUAL, 9),
				versions: {
					...browsers.InternetExplorer,
					v8: null
				},
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isIEVersion(EQUAL, 9),
				version: browsers.InternetExplorer.v9,
				name: 'v9',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(LESS_THEN_OR_EQUAL, 9),
				versions: {
					...browsers.InternetExplorer,
					v10: null,
					v11: null
				},
				validCase: true
			});
		});
	});

	describe('10', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(MORE_THEN_OR_EQUAL, 10),
				versions: {
					...browsers.InternetExplorer,
					v8: null,
					v9: null
				},
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isIEVersion(EQUAL, 10),
				version: browsers.InternetExplorer.v10,
				name: 'v10',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(LESS_THEN_OR_EQUAL, 10),
				versions: {
					...browsers.InternetExplorer,
					v11: null
				},
				validCase: true
			});
		});
	});

	describe('11', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(MORE_THEN_OR_EQUAL, 11),
				versions: {
					...browsers.InternetExplorer,
					v8: null,
					v9: null,
					v10: null
				},
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isIEVersion(EQUAL, 11),
				version: browsers.InternetExplorer.v11,
				name: 'v11',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isIEVersion(LESS_THEN_OR_EQUAL, 11),
				versions: browsers.InternetExplorer,
				validCase: true
			});
		});
	});
});
