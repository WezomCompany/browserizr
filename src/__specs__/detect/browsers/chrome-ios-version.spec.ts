import browserizr from '../../../core';
import { isChromeIOSVersion } from '../../../detect/browsers/chrome-ios-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Google Chrome Browser version on iOS', () => {
	describe('Google Chrome 87 on iOS', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
				...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
				...uaDB.iPod_iOS_14.ChromeIOS_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeIOSVersion(MORE_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
				...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
				...uaDB.iPod_iOS_14.ChromeIOS_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeIOSVersion(EQUAL, 87))).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
				...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
				...uaDB.iPod_iOS_14.ChromeIOS_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeIOSVersion(LESS_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.iPad_iOS_14.ChromeIOS_87.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeIOSVersion(LESS_THEN_OR_EQUAL, 86))
					).toBeFalsy();
				});
			});
		});

		describe('Should not pass', () => {
			[...uaDB.MacOS_11.Yandex_20.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeIOSVersion(LESS_THEN_OR_EQUAL, 86))
					).toBeFalsy();
				});
			});
		});
	});
});
