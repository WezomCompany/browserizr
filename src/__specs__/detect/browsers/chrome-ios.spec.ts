import browserizr, { isChromeIOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Google Chrome Browser on iOS', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.iOS.v14.Chrome)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject({
				...uaDB.iOS.v11,
				Chrome: null
			}),
			...deepFlatFromObject({
				...uaDB.iOS.v14,
				Chrome: null
			}),
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOS)).toBeFalsy();
			});
		});
	});
});
