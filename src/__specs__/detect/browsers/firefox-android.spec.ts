import browserizr from '../../../core';
import { isFirefoxAndroid } from '../../../detect/browsers/firefox-android';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser on Android OS', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android.v11.Firefox.v83.Standard,
			...uaDB.Android.v11.Firefox.v83['Firefox on Lg']
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Linux.Firefox.v83.Standard,
			...uaDB.MacOS.v11.Firefox.v83.Standard,
			...uaDB.Windows.v10.Firefox.v83.Standard,
			...uaDB.iOS.v11.Firefox.v29.iPad,
			...uaDB.iOS.v11.Firefox.v29.iPhone,
			...uaDB.iOS.v11.Firefox.v29.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxAndroid)).toBeFalsy();
			});
		});
	});
});
