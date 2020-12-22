import browserizr, {
	EQUAL,
	isFirefoxAndroidVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Mozilla Firefox Android Browser 82 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
			...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxAndroidVersion(MORE_THEN_OR_EQUAL, 82))
				).toBeTruthy();
			});
		});
	});
	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Android.v10.Firefox.v82)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxAndroidVersion(EQUAL, 82))
				).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroidVersion(EQUAL, 82))).toBeFalsy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Android.v10.Firefox.v82)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxAndroidVersion(LESS_THEN_OR_EQUAL, 82))
				).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxAndroidVersion(LESS_THEN_OR_EQUAL, 82))
				).toBeFalsy();
			});
		});
	});
});
