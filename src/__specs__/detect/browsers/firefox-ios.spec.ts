import browserizr from '../../../core';
import { isFirefoxIOS } from '../../../detect/browsers/firefox-ios';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser on iOS', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v11.Firefox.v29.iPad,
			...uaDB.iOS.v11.Firefox.v29.iPhone,
			...uaDB.iOS.v11.Firefox.v29.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Android.v11.Firefox.v83.Standard,
			...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
			...uaDB.Linux.Firefox.v83.Standard,
			...uaDB.MacOS.v11.Firefox.v83.Standard,
			...uaDB.Windows.v10.Firefox.v83.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOS)).toBeFalsy();
			});
		});
	});
});
