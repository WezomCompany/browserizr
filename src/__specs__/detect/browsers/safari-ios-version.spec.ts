import browserizr from '../../../core';
import { isSafariIOSVersion } from '../../../detect/browsers/safari-ios-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Apple Safari Browser version on iOS', () => {
	describe('Safari iOS 14', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v14.Safari.v14.iPad,
				...uaDB.iOS.v14.Safari.v14.iPhone,
				...uaDB.iOS.v14.Safari.v14.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isSafariIOSVersion(MORE_THEN_OR_EQUAL, 14))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.iOS.v14.Safari.v14.iPad,
				...uaDB.iOS.v14.Safari.v14.iPhone,
				...uaDB.iOS.v14.Safari.v14.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isSafariIOSVersion(EQUAL, 14))).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v14.Safari.v14.iPad,
				...uaDB.iOS.v14.Safari.v14.iPhone,
				...uaDB.iOS.v14.Safari.v14.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isSafariIOSVersion(LESS_THEN_OR_EQUAL, 14))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not pass`, () => {
			[...uaDB.MacOS.v11.Safari.v14.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isSafariIOSVersion(EQUAL, 14))).toBeFalsy();
				});
			});
		});
	});
});
