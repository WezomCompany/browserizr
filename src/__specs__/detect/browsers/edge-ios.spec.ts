import { browsers, testNavigatorList } from '../../fixtures';
import { isEdgeIOS } from '../../../detect/browsers/edge-ios';

describe('detect Edge browser on iOS', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isEdgeIOS,
			versions: browsers.EdgeIOS,
			validCase: true
		});
	});
	describe('Invalid cases: pack #1. Edge', () => {
		testNavigatorList({
			detect: isEdgeIOS,
			versions: browsers.Edge,
			validCase: false
		});
	});
	describe('Invalid cases: pack #1. Android', () => {
		testNavigatorList({
			detect: isEdgeIOS,
			versions: browsers.EdgeAndroid,
			validCase: false
		});
	});
});
