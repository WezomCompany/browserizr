import browserizr, {
	isAndroidVersion,
	EQUAL,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Android OS Version', () => {
	describe('Android 10', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Android.v10),
				...deepFlatFromObject(uaDB.Android.v11),
				...deepFlatFromObject(uaDB.WindowsMobile)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(MORE_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Android.v10),
				...deepFlatFromObject(uaDB.WindowsMobile)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isAndroidVersion(EQUAL, 10))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Android.v10),
				...deepFlatFromObject(uaDB.WindowsMobile)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v11)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeFalsy();
				});
			});
		});
	});

	describe('Android 11', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v11)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(MORE_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v11)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isAndroidVersion(EQUAL, 11))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Android.v10),
				...deepFlatFromObject(uaDB.Android.v11),
				...deepFlatFromObject(uaDB.WindowsMobile)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isAndroidVersion(LESS_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});
	});
});
