import browserizr from '../../../core';
import { isIPod } from '../../../detect/devices/ipod';
import { uaDB } from '../../db';

describe('Detect isIPod device', () => {
	describe('Should pass', () => {
		[
			...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPod_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPod_iOS_14.Safari_14.Standard,
			...uaDB.iPod_iOS_14.Yandex_20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIPod)).toBeTruthy();
			});
		});
	});
});
