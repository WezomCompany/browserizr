import browserizr from '../../../core';
import { isChromeIOS } from '../../../detect/browsers/chrome-ios';
import { uaDB } from '../../db';

describe('detect Google Chrome browser on iOS', () => {
	describe('Should pass', () => {
		[
			...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPod_iOS_14.ChromeIOS_87.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.MacOS_11.Chrome_87.Standard,
			...uaDB.Linux.Chrome_87.Standard,
			...uaDB.Windows_10.Chrome_87.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOS)).toBeFalsy();
			});
		});
	});
});
