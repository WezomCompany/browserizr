import { isEdgeVersion } from '../../../detect/browsers/edge-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { browsers, testNavigatorList, testNavigatorListVersion } from '../../fixtures';

describe('Detect Microsoft Edge browser version', () => {
	describe('40', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeVersion(MORE_THEN_OR_EQUAL, 40),
				versions: browsers.Edge,
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isEdgeVersion(EQUAL, 40),
				version: browsers.Edge.v40,
				name: 'v40',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeVersion(LESS_THEN_OR_EQUAL, 40),
				versions: {
					...browsers.Edge,
					v44: null,
					v87: null
				},
				validCase: true
			});
		});
	});

	describe('44', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeVersion(MORE_THEN_OR_EQUAL, 44),
				versions: {
					...browsers.Edge,
					v40: null
				},
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isEdgeVersion(EQUAL, 44),
				version: browsers.Edge.v44,
				name: 'v44',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeVersion(LESS_THEN_OR_EQUAL, 44),
				versions: {
					...browsers.Edge,
					v87: null
				},
				validCase: true
			});
		});
	});

	describe('87', () => {
		describe(MORE_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeVersion(MORE_THEN_OR_EQUAL, 87),
				versions: {
					...browsers.Edge,
					v40: null,
					v44: null
				},
				validCase: true
			});
		});
		describe(EQUAL, () => {
			testNavigatorListVersion({
				detect: isEdgeVersion(EQUAL, 87),
				version: browsers.Edge.v87,
				name: 'v87',
				validCase: true
			});
		});
		describe(LESS_THEN_OR_EQUAL, () => {
			testNavigatorList({
				detect: isEdgeVersion(LESS_THEN_OR_EQUAL, 87),
				versions: {
					...browsers.Edge
				},
				validCase: true
			});
		});
	});
});
