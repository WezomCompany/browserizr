import browserizr, {
	EQUAL,
	isChromeAndroidVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Google Chrome Browser version on Android OS', () => {
	describe('Google Chrome Android 85', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v85),
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeAndroidVersion(MORE_THEN_OR_EQUAL, 85))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeAndroidVersion(EQUAL, 85))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeAndroidVersion(LESS_THEN_OR_EQUAL, 85))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Google Chrome Android 87', () => {
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
		describe(`Should be ${EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeAndroidVersion(EQUAL, 87))
					).toBeTruthy();
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
});
