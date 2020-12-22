import browserizr, {
	EQUAL,
	isChromeAndroidVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Google Chrome Android Browser 87 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isChromeAndroidVersion(MORE_THEN_OR_EQUAL, 87))
				).toBeTruthy();
			});
		});
	});
	describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isChromeAndroidVersion(MORE_THEN_OR_EQUAL, 87))
				).toBeFalsy();
			});
		});
	});
	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroidVersion(EQUAL, 87))).toBeTruthy();
			});
		});
	});
	describe(`Should not be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroidVersion(EQUAL, 87))).toBeFalsy();
			});
		});
	});
	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Android.v10.Chrome.v85),
			...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isChromeAndroidVersion(LESS_THEN_OR_EQUAL, 87))
				).toBeTruthy();
			});
		});
	});
});
