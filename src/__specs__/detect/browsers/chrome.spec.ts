import browserizr, { isChrome } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Google Chrome Browser', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChrome)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject({
				...uaDB.Linux,
				Chrome: null
			}),
			...deepFlatFromObject({
				...uaDB.MacOS.v11,
				Chrome: null
			}),
			...deepFlatFromObject({
				...uaDB.Windows.v10,
				Chrome: null
			}),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.WindowsMobile)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChrome)).toBeFalsy();
			});
		});
	});
});
