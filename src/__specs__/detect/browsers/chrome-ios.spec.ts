import browserizr from '../../../core';
import { isChromeIOS } from '../../../detect/browsers/chrome-ios';
import { uaDB } from '../../db';

describe('Detect Google Chrome Browser on iOS', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.MacOS.v11.Chrome.v87.Standard,
			...uaDB.Linux.Chrome.v87.Standard,
			...uaDB.Windows.v10.Chrome.v87.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOS)).toBeFalsy();
			});
		});
	});
});
