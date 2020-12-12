import browserizr from '../../../core';
import { isFirefoxAndroid } from '../../../detect/browsers/firefox-android';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser on Android OS', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android_11.FirefoxAndroid_83.Standard,
			...uaDB.Android_11.FirefoxAndroid_83['Firefox on Lg']
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Linux.Firefox_83.Standard,
			...uaDB.MacOS_11.Firefox_83.Standard,
			...uaDB.Windows_10.Firefox_83.Standard,
			...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroid)).toBeFalsy();
			});
		});
	});
});
