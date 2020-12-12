import browserizr from '../../../core';
import { isAndroidOSVersion } from '../../../detect/os/android-version';
import { uaDB } from '../../db';
import { MORE_THEN_OR_EQUAL } from '../../../utils';

describe('Detect Android OS Version', () => {
	describe('Android 10', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_10.ChromeAndroid_85.Standard,
				...uaDB.Android_10.ChromeAndroid_87.Standard,
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Lg'],
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Samsung'],
				...uaDB.Android_10.EdgeAndroid_45.Standard,
				...uaDB.Android_10.Opera_59['Opera on Huawei'],
				...uaDB.Android_10.Opera_59['Opera on Sumsung'],
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg'],
				...uaDB.Android_11.Yandex_20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidOSVersion(MORE_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});
	});
});
