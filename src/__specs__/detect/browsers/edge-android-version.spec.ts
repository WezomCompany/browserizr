import browserizr from '../../../core';
import { isEdgeAndroidVersion } from '../../../detect/browsers/edge-android-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge Browser version on Android', () => {
	describe('Edge Android 45', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[...uaDB.Android.v10.Edge.v45.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(MORE_THEN_OR_EQUAL, 45))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Android.v10.Edge.v45.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(EQUAL, 45))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.Android.v10.Edge.v45.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(LESS_THEN_OR_EQUAL, 45))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Edge.v45.Standard,
				...uaDB.iOS.v14.Edge.v45.iPhone
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(MORE_THEN_OR_EQUAL, 50))
					).toBeFalsy();
				});
			});
		});
	});
});
