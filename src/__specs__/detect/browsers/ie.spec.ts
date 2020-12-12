import browserizr from '../../../core';
import { isIE } from '../../../detect/browsers/ie';
import { uaDB } from '../../db';

describe('Detect Internet Explorer browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Windows_XP.InternetExplorer_v8.Standard,
			...uaDB.Windows_Vista.InternetExplorer_v8.Standard,
			...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
			...uaDB.Windows_7.InternetExplorer_v8.Standard,
			...uaDB.Windows_7.InternetExplorer_v9.Standard,
			...uaDB.Windows_7.InternetExplorer_v10.Standard,
			...uaDB.Windows_7.InternetExplorer_v11.Standard,
			...uaDB.Windows_8.InternetExplorer_v10.Standard,
			...uaDB.Windows_8.InternetExplorer_v11.Standard,
			...uaDB.Windows_8_1.InternetExplorer_v11.Standard,
			...uaDB.Windows_10.InternetExplorer_v11.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIE)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Windows_10.Edge_87.Standard,
			...uaDB.Windows_Mobile.Edge_40.Standard,
			...uaDB.Xbox.Edge_44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIE)).toBeFalsy();
			});
		});
	});
});
