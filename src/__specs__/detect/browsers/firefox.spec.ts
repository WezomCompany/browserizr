import browserizr, { isFirefox } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.Linux.Firefox),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefox)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject({
				...uaDB.Linux,
				Firefox: null
			}),
			...deepFlatFromObject({
				...uaDB.MacOS.v11,
				Firefox: null
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Firefox: null
				}
			}),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefox)).toBeFalsy();
			});
		});
	});
});
