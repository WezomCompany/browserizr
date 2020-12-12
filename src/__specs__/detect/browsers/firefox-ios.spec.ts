import browserizr from '../../../core';
import { isFirefoxIOS } from '../../../detect/browsers/firefox-ios';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox browser on iOS', () => {
	describe('Should pass', () => {
		[
			...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Android_11.Firefox_83.Standard,
			...uaDB.Android_11.Firefox_83['Firefox on Lg'],
			...uaDB.Linux.Firefox_83.Standard,
			...uaDB.MacOS_11.Firefox_83.Standard,
			...uaDB.Windows_10.Firefox_83.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOS)).toBeFalsy();
			});
		});
	});
});
