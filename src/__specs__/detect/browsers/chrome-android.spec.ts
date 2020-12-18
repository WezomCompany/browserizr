import browserizr, { isChromeAndroid } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Google Chrome Browser on Android OS', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.Android.v10.Chrome)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject({
				...uaDB.Android.v10,
				Chrome: null
			}),
			...deepFlatFromObject({
				...uaDB.Android.v11,
				Chrome: null
			}),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.WindowsMobile)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroid)).toBeFalsy();
			});
		});
	});
});
