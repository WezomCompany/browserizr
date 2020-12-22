import browserizr, {
	EQUAL,
	isFirefoxVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser 83 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxVersion(MORE_THEN_OR_EQUAL, 83))
				).toBeTruthy();
			});
		});
	});
	describe(`Should be ${EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxVersion(EQUAL, 83))).toBeTruthy();
			});
		});
	});
	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxVersion(LESS_THEN_OR_EQUAL, 83))
				).toBeTruthy();
			});
		});
	});

	describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
		[...uaDB.Linux.Firefox.v83.Standard].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxVersion(MORE_THEN_OR_EQUAL, 87))
				).toBeFalsy();
			});
		});
	});
});
