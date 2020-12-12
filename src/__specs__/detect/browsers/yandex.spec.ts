import browserizr from '../../../core';
import { isYandex } from '../../../detect/browsers/yandex';
import { uaDB } from '../../db';

describe('Detect Yandex Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android_11.Yandex_20.Standard,
			...uaDB.iPad_iOS_14.Yandex_20.Standard,
			...uaDB.iPhone_iOS_14.Yandex_20.Standard,
			...uaDB.iPod_iOS_14.Yandex_20.Standard,
			...uaDB.MacOS_11.Yandex_20.Standard,
			...uaDB.Windows_10.Yandex_20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isYandex)).toBeTruthy();
			});
		});
	});
});
