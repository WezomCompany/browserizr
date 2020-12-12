import browserizr from '../../../core';
import { isFirefoxAndroidVersion } from '../../../detect/browsers/firefox-android-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser version', () => {
	describe('Mozilla Firefox 83', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg']
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxAndroidVersion(MORE_THEN_OR_EQUAL, 83))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg']
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxAndroidVersion(EQUAL, 83))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android_11.FirefoxAndroid_83.Standard,
				...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg']
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxAndroidVersion(LESS_THEN_OR_EQUAL, 83))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
			[...uaDB.Android_11.FirefoxAndroid_83.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxAndroidVersion(MORE_THEN_OR_EQUAL, 84))
					).toBeFalsy();
				});
			});
		});

		describe(`Should not pass`, () => {
			[
				...uaDB.Linux.Firefox_83.Standard,
				...uaDB.MacOS_11.Firefox_83.Standard,
				...uaDB.Windows_10.Firefox_83.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxAndroidVersion(EQUAL, 87))
					).toBeFalsy();
				});
			});
		});
	});
});
