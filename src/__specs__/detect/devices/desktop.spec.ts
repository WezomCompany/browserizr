import { browsers, testNavigatorList } from '../../fixtures';
import { isDesktop } from '../../../detect/devices/desktop';

describe('detect desktop device', () => {
	describe('Invalid cases. Chrome', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Chrome,
			validCase: false,
			includeOnlyPlatforms: ['Android']
		});
	});
	describe('Valid cases. Chrome', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Chrome,
			validCase: true,
			excludePlatforms: ['Android']
		});
	});
	describe('Invalid cases. ChromeIOS', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.ChromeIOS,
			validCase: false
		});
	});
	describe('Invalid cases. Firefox', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Firefox,
			validCase: false,
			includeOnlyPlatforms: ['Android']
		});
	});
	describe('Valid cases. Firefox', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Firefox,
			validCase: true,
			excludePlatforms: ['Android']
		});
	});
	describe('Invalid cases. Firefox iOS', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.FirefoxIOS,
			validCase: false
		});
	});
	describe('Invalid cases. Edge Android', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.EdgeAndroid,
			validCase: false
		});
	});
	describe('Invalid cases. Edge iOS', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.EdgeIOS,
			validCase: false
		});
	});
	describe('Invalid cases. Edge', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Edge,
			validCase: false,
			includeOnlyPlatforms: ['WindowsMobile']
		});
	});
	describe('Valid cases. Edge', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Edge,
			validCase: true,
			excludePlatforms: ['WindowsMobile']
		});
	});
	describe('Invalid cases. Safari iOS', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Safari,
			validCase: false,
			includeOnlyPlatforms: ['iOS']
		});
	});
	describe('Valid cases. Safari', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Safari,
			validCase: true,
			excludePlatforms: ['iOS']
		});
	});
	describe('Invalid cases. Yandex on IOS', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.YandexOnIOS,
			validCase: false
		});
	});
	describe('Invalid cases. Yandex', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Yandex,
			validCase: false,
			includeOnlyPlatforms: ['Android']
		});
	});
	describe('Valid cases. Yandex', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Yandex,
			validCase: true,
			excludePlatforms: ['Android']
		});
	});
	describe('Valid cases. Vivaldi', () => {
		testNavigatorList({
			detect: isDesktop,
			versions: browsers.Vivaldi,
			validCase: true
		});
	});
});
