import browserizr from '../../../core';
import { isIPad } from '../../../detect/devices/ipad';
import { uaDB } from '../../db';

describe('Detect iPad device', () => {
	describe('Should pass', () => {
		[
			...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPad_iOS_14.Safari_14.Standard,
			...uaDB.iPad_iOS_14.Yandex_20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIPad)).toBeTruthy();
			});
		});
	});
});
