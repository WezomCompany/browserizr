import browserizr, { isSafariIOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Apple Safari Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v14.Safari.v14.iPad,
			...uaDB.iOS.v14.Safari.v14.iPhone,
			...uaDB.iOS.v14.Safari.v14.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafariIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject({
				...uaDB.iOS,
				v14: {
					...uaDB.iOS.v14,
					Safari: null
				}
			}),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafariIOS)).toBeFalsy();
			});
		});
	});
});
