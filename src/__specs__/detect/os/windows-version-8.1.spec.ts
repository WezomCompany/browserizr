import browserizr, {
	EQUAL,
	isWindowsVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Windows OS 8.1', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.v8_1),
			...deepFlatFromObject(uaDB.Windows.v10)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 8.1))
				).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.XP),
			...deepFlatFromObject(uaDB.Windows.Vista),
			...deepFlatFromObject(uaDB.Windows.v7),
			...deepFlatFromObject(uaDB.Windows.v8)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 8.1))
				).toBeFalsy();
			});
		});
	});

	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Windows.v8_1)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, 8.1))).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${EQUAL}`, () => {
		[
			...deepFlatFromObject({
				...uaDB.Windows,
				// eslint-disable-next-line @typescript-eslint/camelcase
				v8_1: null
			})
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindowsVersion(EQUAL, 8.1))).toBeFalsy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.XP),
			...deepFlatFromObject(uaDB.Windows.Vista),
			...deepFlatFromObject(uaDB.Windows.v7),
			...deepFlatFromObject(uaDB.Windows.v8),
			...deepFlatFromObject(uaDB.Windows.v8_1)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 8.1))
				).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.Windows.v10)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 8.1))
				).toBeFalsy();
			});
		});
	});
});
