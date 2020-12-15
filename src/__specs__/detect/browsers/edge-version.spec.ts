import browserizr from '../../../core';
import { isEdgeVersion } from '../../../detect/browsers/edge-version';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge Browser version', () => {
	describe('Edge 40', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.WindowsMobile.Edge.v40.Standard,
				...uaDB.Xbox.Edge.v44.Standard,
				...uaDB.MacOS.v11.Edge.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard
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
			[...uaDB.WindowsMobile.Edge.v40.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 40))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.WindowsMobile.Edge.v40.Standard].forEach((ua, i) => {
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
				...uaDB.Xbox.Edge.v44.Standard,
				...uaDB.MacOS.v11.Edge.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard
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
				...uaDB.Xbox.Edge.v44.Standard,
				...uaDB.MacOS.v11.Edge.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard
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
				...uaDB.Xbox.Edge.v44.Standard,
				...uaDB.MacOS.v11.Edge.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard
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
			[...uaDB.Xbox.Edge.v44.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 44))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.WindowsMobile.Edge.v40.Standard,
				...uaDB.Xbox.Edge.v44.Standard
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
			[...uaDB.WindowsMobile.Edge.v40.Standard].forEach((ua, i) => {
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
		[...uaDB.Android.v10.Edge.v45.Standard, ...uaDB.iOS.v14.Edge.v45.iPhone].forEach(
			(ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(MORE_THEN_OR_EQUAL, 44))
					).toBeFalsy();
				});
			}
		);
	});
});
