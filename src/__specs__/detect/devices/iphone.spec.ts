import browserizr from '../../../core';
import { isIPhone } from '../../../detect/devices/iphone';
import { uaDB } from '../../db';

describe('Detect iPhone device', () => {
	describe('Should pass', () => {
		[
			...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard,
			...uaDB.iPhone_iOS_14.Safari_14.Standard,
			...uaDB.iPhone_iOS_14.Yandex_20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIPhone)).toBeTruthy();
			});
		});
	});
});
