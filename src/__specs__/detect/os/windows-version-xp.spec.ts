import browserizr, {
	EQUAL,
	isWindowsVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Windows OS XP', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.XP),
			...deepFlatFromObject(uaDB.Windows.Vista),
			...deepFlatFromObject(uaDB.Windows.v7),
			...deepFlatFromObject(uaDB.Windows.v8),
			...deepFlatFromObject(uaDB.Windows.v8_1),
			...deepFlatFromObject(uaDB.Windows.v10)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'XP'))
				).toBeTruthy();
			});
		});
	});

	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, 'XP'))).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${EQUAL}`, () => {
		[
			...deepFlatFromObject({
				...uaDB.Windows,
				XP: null
			})
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, 'XP'))).toBeFalsy();
			});
		});
	});

	describe(`XX Should not be ${EQUAL}`, () => {
		const version = 'XX' as 'XP';
		[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, version))).toBeFalsy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'XP'))
				).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
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
					browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'XP'))
				).toBeFalsy();
			});
		});
	});
});
