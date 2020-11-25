import { browsers, testNavigatorList } from '../../fixtures';
import { isEdge } from '../../../detect/browsers/edge';

describe('detect Edge browser', () => {
	describe('Valid cases', () => {
		testNavigatorList({
			detect: isEdge,
			versions: browsers.Edge,
			validCase: true
		});
	});
	describe('Invalid cases: pack #1. Edge iOS', () => {
		testNavigatorList({
			detect: isEdge,
			versions: browsers.EdgeIOS,
			validCase: false
		});
	});
	describe('Invalid cases: pack #1. Android', () => {
		testNavigatorList({
			detect: isEdge,
			versions: browsers.EdgeAndroid,
			validCase: false
		});
	});
});
