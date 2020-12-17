import browserizr, { isMobile } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect mobile device', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.WindowsMobile)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isMobile)).toBeTruthy();
			});
		});
	});
	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.Xbox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isMobile)).toBeFalsy();
			});
		});
	});
});
