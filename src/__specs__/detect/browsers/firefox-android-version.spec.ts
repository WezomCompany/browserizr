import browserizr from '../../../core';
import { isFirefoxAndroidVersion } from '../../../detect/browsers/firefox-android-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser version', () => {
	describe('Mozilla Firefox 83', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg']
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
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg']
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
				...uaDB.Android.v11.Firefox.v83.Standard,
				...uaDB.Android.v11.Firefox.v83['Firefox on Lg']
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
			[...uaDB.Android.v11.Firefox.v83.Standard].forEach((ua, i) => {
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
				...uaDB.Linux.Firefox.v83.Standard,
				...uaDB.MacOS.v11.Firefox.v83.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard
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
