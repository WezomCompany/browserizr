import { browsers, testNavigatorList } from '../../fixtures';
import { isMobile } from '../../../detect/devices/mobile';

describe('detect mobile device', () => {
	describe('Valid cases. Chrome', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Chrome,
			validCase: true,
			includeOnlyPlatforms: ['Android']
		});
	});
	describe('Invalid cases. Chrome', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Chrome,
			validCase: false,
			excludePlatforms: ['Android']
		});
	});
	describe('Valid cases. ChromeIOS', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.ChromeIOS,
			validCase: true
		});
	});
	describe('Valid cases. Firefox', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Firefox,
			validCase: true,
			includeOnlyPlatforms: ['Android']
		});
	});
	describe('Invalid cases. Firefox', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Firefox,
			validCase: false,
			excludePlatforms: ['Android']
		});
	});
	describe('Valid cases. Firefox iOS', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.FirefoxIOS,
			validCase: true
		});
	});
	describe('Valid cases. Edge Android', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.EdgeAndroid,
			validCase: true
		});
	});
	describe('Valid cases. Edge iOS', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.EdgeIOS,
			validCase: true
		});
	});
	describe('Valid cases. Edge', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Edge,
			validCase: true,
			includeOnlyPlatforms: ['WindowsMobile']
		});
	});
	describe('Invalid cases. Edge', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Edge,
			validCase: false,
			excludePlatforms: ['WindowsMobile']
		});
	});
	describe('Valid cases. Safari iOS', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Safari,
			validCase: true,
			includeOnlyPlatforms: ['iOS']
		});
	});
	describe('Invalid cases. Safari', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Safari,
			validCase: false,
			excludePlatforms: ['iOS']
		});
	});
	describe('Valid cases. Yandex on IOS', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.YandexOnIOS,
			validCase: true
		});
	});
	describe('Valid cases. Yandex', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Yandex,
			validCase: true,
			includeOnlyPlatforms: ['Android']
		});
	});
	describe('Invalid cases. Yandex', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Yandex,
			validCase: false,
			excludePlatforms: ['Android']
		});
	});
	describe('Invalid cases. Vivaldi', () => {
		testNavigatorList({
			detect: isMobile,
			versions: browsers.Vivaldi,
			validCase: false
		});
	});
});
