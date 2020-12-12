import browserizr from '../../../core';
import { uaDB } from '../../db';
import { isChrome } from '../../../detect/browsers/chrome';

describe('Detect Google Chrome browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android_10.Chrome_85.Standard,
			...uaDB.Android_10.Chrome_87.Standard,
			...uaDB.Android_10.Chrome_87['Chrome on Lg'],
			...uaDB.Android_10.Chrome_87['Chrome on Samsung'],
			...uaDB.Linux.Chrome_87.Standard,
			...uaDB.MacOS_11.Chrome_87.Standard,
			...uaDB.Windows_10.Chrome_87.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChrome)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPod_iOS_14.ChromeIOS_87.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChrome)).toBeFalsy();
			});
		});
	});
});
