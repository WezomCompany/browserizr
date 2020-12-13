import browserizr from '../../../core';
import { isAndroidVersion } from '../../../detect/os/android-version';
import { uaDB } from '../../db';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';

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
				...uaDB.Windows_Mobile.Edge_40.Standard,
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg'],
				...uaDB.Android_11.Yandex_20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(MORE_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Android_10.ChromeAndroid_85.Standard,
				...uaDB.Android_10.ChromeAndroid_87.Standard,
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Lg'],
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Samsung'],
				...uaDB.Android_10.EdgeAndroid_45.Standard,
				...uaDB.Android_10.Opera_59['Opera on Huawei'],
				...uaDB.Android_10.Opera_59['Opera on Sumsung'],
				...uaDB.Windows_Mobile.Edge_40.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isAndroidVersion(EQUAL, 10))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_10.ChromeAndroid_85.Standard,
				...uaDB.Android_10.ChromeAndroid_87.Standard,
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Lg'],
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Samsung'],
				...uaDB.Android_10.EdgeAndroid_45.Standard,
				...uaDB.Android_10.Opera_59['Opera on Huawei'],
				...uaDB.Android_10.Opera_59['Opera on Sumsung'],
				...uaDB.Windows_Mobile.Edge_40.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg'],
				...uaDB.Android_11.Yandex_20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeFalsy();
				});
			});
		});

		describe(`Should not pass at all`, () => {
			[
				...uaDB.Linux.Chrome_87.Standard,
				...uaDB.MacOS_11.Safari_14.Standard,
				...uaDB.Windows_10.Chrome_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeFalsy();
				});
			});
		});
	});

	describe('Android 11', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg'],
				...uaDB.Android_11.Yandex_20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(MORE_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg'],
				...uaDB.Android_11.Yandex_20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isAndroidVersion(EQUAL, 11))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_10.ChromeAndroid_85.Standard,
				...uaDB.Android_10.ChromeAndroid_87.Standard,
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Lg'],
				...uaDB.Android_10.ChromeAndroid_87['Chrome on Samsung'],
				...uaDB.Android_10.EdgeAndroid_45.Standard,
				...uaDB.Android_10.Opera_59['Opera on Huawei'],
				...uaDB.Android_10.Opera_59['Opera on Sumsung'],
				...uaDB.Windows_Mobile.Edge_40.Standard,
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg'],
				...uaDB.Android_11.Yandex_20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});
	});
});
