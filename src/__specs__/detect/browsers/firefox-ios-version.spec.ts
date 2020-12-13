import browserizr from '../../../core';
import { isFirefoxIOSVersion } from '../../../detect/browsers/firefox-ios-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser version on iOS', () => {
	describe('Mozilla Firefox 29 on iOS', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
				...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
				...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
				...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
				...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(EQUAL, 29))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
				...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
				...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(LESS_THEN_OR_EQUAL, 29))
					).toBeTruthy();
				});
			});
		});

		describe('Should not pass', () => {
			[...uaDB.Windows_10.Firefox_83.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29))
					).toBeFalsy();
				});
			});
		});
	});
});
