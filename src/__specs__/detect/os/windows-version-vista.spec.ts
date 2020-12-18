import browserizr, {
	EQUAL,
	isWindowsVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Windows OS Vista', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.Vista),
			...deepFlatFromObject(uaDB.Windows.v7),
			...deepFlatFromObject(uaDB.Windows.v8),
			...deepFlatFromObject(uaDB.Windows.v8_1),
			...deepFlatFromObject(uaDB.Windows.v10)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'Vista'))
				).toBeTruthy();
			});
		});
	});
	describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'Vista'))
				).toBeFalsy();
			});
		});
	});

	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Windows.Vista)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, 'Vista'))).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${EQUAL}`, () => {
		[
			...deepFlatFromObject({
				...uaDB.Windows,
				Vista: null
			})
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, 'Vista'))).toBeFalsy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.XP),
			...deepFlatFromObject(uaDB.Windows.Vista)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'Vista'))
				).toBeTruthy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.XP),
			...deepFlatFromObject(uaDB.Windows.Vista)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'Vista'))
				).toBeTruthy();
			});
		});
	});
});
