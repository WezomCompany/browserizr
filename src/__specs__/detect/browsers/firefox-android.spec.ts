import browserizr, { isFirefoxAndroid } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Mozilla Firefox Android Browser', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.Android.v10.Firefox),
			...deepFlatFromObject(uaDB.Android.v11.Firefox)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject({
				...uaDB,
				Android: {
					...uaDB.Android,
					v10: {
						...uaDB.Android.v11,
						Firefox: null
					},
					v11: {
						...uaDB.Android.v11,
						Firefox: null
					}
				}
			})
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroid)).toBeFalsy();
			});
		});
	});
});
