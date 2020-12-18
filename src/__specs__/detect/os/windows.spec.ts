import browserizr, { isWindows } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Windows OS', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindows)).toBeTruthy();
			});
		});
	});
	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.MacOS)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindows)).toBeFalsy();
			});
		});
	});
});
