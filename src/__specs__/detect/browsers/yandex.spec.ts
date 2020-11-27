import { browsers, testNavigatorList } from '../../fixtures';
import { isYandex } from '../../../detect/browsers/yandex';

describe('detect Yandex browser', () => {
	describe('Valid cases: pack #1, Yandex', () => {
		testNavigatorList({
			detect: isYandex,
			versions: browsers.Yandex,
			validCase: true
		});
	});
	describe('Valid cases: pack #2, Yandex on iOS', () => {
		testNavigatorList({
			detect: isYandex,
			versions: browsers.YandexOnIOS,
			validCase: true
		});
	});
	describe('Invalid cases', () => {
		testNavigatorList({
			detect: isYandex,
			versions: browsers.Chrome,
			validCase: false
		});
	});
});
