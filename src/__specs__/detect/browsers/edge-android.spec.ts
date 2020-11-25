import { browsers, testNavigatorList } from '../../fixtures';
import { isEdgeAndroid } from '../../../detect/browsers/edge-android';

describe('detect Edge browser on Android', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isEdgeAndroid,
			versions: browsers.EdgeAndroid,
			validCase: true
		});
	});
	describe('Invalid cases: pack #1. Edge', () => {
		testNavigatorList({
			detect: isEdgeAndroid,
			versions: browsers.Edge,
			validCase: false
		});
	});
	describe('Invalid cases: pack #1. Edge iOS', () => {
		testNavigatorList({
			detect: isEdgeAndroid,
			versions: browsers.EdgeIOS,
			validCase: false
		});
	});
});
