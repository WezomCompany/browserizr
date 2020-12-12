import browserizr from '../../../core';
import { uaDB } from '../../db';
import { isChromeAndroid } from '../../../detect/browsers/chrome-android';

describe('Detect Google Chrome browser on Android OS', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android_10.ChromeAndroid_85.Standard,
			...uaDB.Android_10.ChromeAndroid_87.Standard,
			...uaDB.Android_10.ChromeAndroid_87['Chrome on Lg'],
			...uaDB.Android_10.ChromeAndroid_87['Chrome on Samsung']
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeAndroid)).toBeTruthy();
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
				expect(browserizr.detect(isChromeAndroid)).toBeFalsy();
			});
		});
	});
});
