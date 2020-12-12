import browserizr from '../../../core';
import { isChromeVersion } from '../../../detect/browsers/chrome-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('detect Google Chrome browser version', () => {
	describe('Google Chrome 85', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_10.Chrome_85.Standard,
				...uaDB.Android_10.Chrome_87.Standard,
				...uaDB.Android_10.Chrome_87['Chrome on Lg'],
				...uaDB.Android_10.Chrome_87['Chrome on Samsung'],
				...uaDB.Linux.Chrome_87.Standard,
				...uaDB.MacOS_11.Chrome_87.Standard,
				...uaDB.Windows_10.Chrome_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeVersion(MORE_THEN_OR_EQUAL, 85))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Android_10.Chrome_85.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 85))).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.Android_10.Chrome_85.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeVersion(LESS_THEN_OR_EQUAL, 85))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Google Chrome 87', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_10.Chrome_87.Standard,
				...uaDB.Android_10.Chrome_87['Chrome on Lg'],
				...uaDB.Android_10.Chrome_87['Chrome on Samsung'],
				...uaDB.Linux.Chrome_87.Standard,
				...uaDB.MacOS_11.Chrome_87.Standard,
				...uaDB.Windows_10.Chrome_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeVersion(MORE_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Android_10.Chrome_87.Standard,
				...uaDB.Android_10.Chrome_87['Chrome on Lg'],
				...uaDB.Android_10.Chrome_87['Chrome on Samsung'],
				...uaDB.Linux.Chrome_87.Standard,
				...uaDB.MacOS_11.Chrome_87.Standard,
				...uaDB.Windows_10.Chrome_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 87))).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_10.Chrome_85.Standard,
				...uaDB.Android_10.Chrome_87.Standard,
				...uaDB.Android_10.Chrome_87['Chrome on Lg'],
				...uaDB.Android_10.Chrome_87['Chrome on Samsung'],
				...uaDB.Linux.Chrome_87.Standard,
				...uaDB.MacOS_11.Chrome_87.Standard,
				...uaDB.Windows_10.Chrome_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeVersion(LESS_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[...uaDB.Android_10.Chrome_85.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 87))).toBeFalsy();
				});
			});
		});

		describe(`Should not pass`, () => {
			[...uaDB.Windows_10.Yandex_20.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 87))).toBeFalsy();
				});
			});
		});
	});
});
