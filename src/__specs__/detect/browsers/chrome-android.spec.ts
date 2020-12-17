import browserizr, { isChromeAndroid } from '../../../index';
import { uaDB } from '../../db';

describe('Detect Google Chrome Browser on Android OS', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android.v10.Chrome.v85.Standard,
			...uaDB.Android.v10.Chrome.v87.Standard,
			...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
			...uaDB.Android.v10.Chrome.v87['Chrome on Samsung']
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroid)).toBeFalsy();
			});
		});
	});
});
