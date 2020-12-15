import browserizr from '../../../core';
import { isAndroidVersion } from '../../../detect/os/android-version';
import { uaDB } from '../../db';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';

describe('Detect Android OS Version', () => {
	describe('Android 10', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Chrome.v85.Standard,
				...uaDB.Android.v10.Chrome.v87.Standard,
				...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
				...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
				...uaDB.Android.v10.Edge.v45.Standard,
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.WindowsMobile.Edge.v40.Standard,
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
				...uaDB.Android.v11.Yandex.v20.Standard
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
				...uaDB.Android.v10.Chrome.v85.Standard,
				...uaDB.Android.v10.Chrome.v87.Standard,
				...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
				...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
				...uaDB.Android.v10.Edge.v45.Standard,
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.WindowsMobile.Edge.v40.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isAndroidVersion(EQUAL, 10))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Chrome.v85.Standard,
				...uaDB.Android.v10.Chrome.v87.Standard,
				...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
				...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
				...uaDB.Android.v10.Edge.v45.Standard,
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.WindowsMobile.Edge.v40.Standard
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
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
				...uaDB.Android.v11.Yandex.v20.Standard
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
				...uaDB.Linux.Chrome.v87.Standard,
				...uaDB.MacOS.v11.Safari.v14.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard
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
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
				...uaDB.Android.v11.Yandex.v20.Standard
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
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
				...uaDB.Android.v11.Yandex.v20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isAndroidVersion(EQUAL, 11))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Chrome.v85.Standard,
				...uaDB.Android.v10.Chrome.v87.Standard,
				...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
				...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
				...uaDB.Android.v10.Edge.v45.Standard,
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.WindowsMobile.Edge.v40.Standard,
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
				...uaDB.Android.v11.Yandex.v20.Standard
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
