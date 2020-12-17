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
});
