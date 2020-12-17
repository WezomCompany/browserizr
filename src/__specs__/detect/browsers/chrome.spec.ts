import browserizr, { isChrome } from '../../../index';
import { uaDB } from '../../db';

describe('Detect Google Chrome Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Linux.Chrome.v87.Standard,
			...uaDB.MacOS.v11.Chrome.v87.Standard,
			...uaDB.Windows.v10.Chrome.v87.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChrome)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Android.v10.Chrome.v85.Standard,
			...uaDB.Android.v10.Chrome.v87.Standard,
			...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
			...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
			...uaDB.Android.v11.Yandex.v20.Standard,
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChrome)).toBeFalsy();
			});
		});
	});
});
