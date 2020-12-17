import browserizr, {
	EQUAL,
	isEdgeVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser version', () => {
	describe('Edge 40', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
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
			[...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 40))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(LESS_THEN_OR_EQUAL, 40))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Edge 44', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
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
			[...deepFlatFromObject(uaDB.Xbox.Edge.v44)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 44))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(LESS_THEN_OR_EQUAL, 44))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Edge 87', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(MORE_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdgeVersion(EQUAL, 87))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeVersion(LESS_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});
	});
});
