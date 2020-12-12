import browserizr from '../../../core';
import { isEdgeVersion } from '../../../detect/browsers/edge-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge browser version', () => {
	describe('Edge 40', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_Mobile.Edge_40.Standard,
				...uaDB.Xbox.Edge_44.Standard,
				...uaDB.MacOS_11.Edge_87.Standard,
				...uaDB.Windows_10.Edge_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(MORE_THEN_OR_EQUAL, 40))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Windows_Mobile.Edge_40.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 40))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows_Mobile.Edge_40.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(LESS_THEN_OR_EQUAL, 40))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Xbox.Edge_44.Standard,
				...uaDB.MacOS_11.Edge_87.Standard,
				...uaDB.Windows_10.Edge_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(LESS_THEN_OR_EQUAL, 40))
					).toBeFalsy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...uaDB.Xbox.Edge_44.Standard,
				...uaDB.MacOS_11.Edge_87.Standard,
				...uaDB.Windows_10.Edge_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 40))).toBeFalsy();
				});
			});
		});
	});

	describe('Edge 44', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Xbox.Edge_44.Standard,
				...uaDB.MacOS_11.Edge_87.Standard,
				...uaDB.Windows_10.Edge_87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(MORE_THEN_OR_EQUAL, 44))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Xbox.Edge_44.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 44))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_Mobile.Edge_40.Standard,
				...uaDB.Xbox.Edge_44.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(LESS_THEN_OR_EQUAL, 44))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows_Mobile.Edge_40.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(MORE_THEN_OR_EQUAL, 44))
					).toBeFalsy();
				});
			});
		});
	});

	describe(`Should not be Edge`, () => {
		[
			...uaDB.Android_10.EdgeAndroid_45.Standard,
			...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isEdgeVersion(MORE_THEN_OR_EQUAL, 44))
				).toBeFalsy();
			});
		});
	});
});
