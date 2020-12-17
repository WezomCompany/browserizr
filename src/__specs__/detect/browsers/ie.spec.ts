import browserizr, { isIE } from '../../../index';
import { uaDB } from '../../db';

describe('Detect Internet Explorer Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Windows.XP.InternetExplorer.v8.Standard,
			...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
			...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
			...uaDB.Windows.v7.InternetExplorer.v8.Standard,
			...uaDB.Windows.v7.InternetExplorer.v9.Standard,
			...uaDB.Windows.v7.InternetExplorer.v10.Standard,
			...uaDB.Windows.v7.InternetExplorer.v11.Standard,
			...uaDB.Windows.v8.InternetExplorer.v10.Standard,
			...uaDB.Windows.v8.InternetExplorer.v11.Standard,
			...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
			...uaDB.Windows.v10.InternetExplorer.v11.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIE)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Windows.v10.Edge.v87.Standard,
			...uaDB.WindowsMobile.Edge.v40.Standard,
			...uaDB.Xbox.Edge.v44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIE)).toBeFalsy();
			});
		});
	});
});
