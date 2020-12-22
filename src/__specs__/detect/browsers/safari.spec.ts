import browserizr, { isSafari } from '../../../index';
import { uaDB, deepFlatFromObject } from '../../db';

describe('Detect Apple Safari Browser', () => {
	describe('Should pass', () => {
		[...uaDB.MacOS.v11.Safari.v14.Standard].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafari)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject({
				...uaDB.MacOS,
				v11: {
					...uaDB.MacOS.v11,
					Safari: null
				}
			}),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafari)).toBeFalsy();
			});
		});
	});
});
