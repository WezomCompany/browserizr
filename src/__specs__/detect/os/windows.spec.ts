import browserizr from '../../../core';
import { isWindows } from '../../../detect/os/windows';
import { uaDB } from '../../db';

describe('Detect Windows OS', () => {
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
			...uaDB.Windows.v10.Chrome.v87.Standard,
			...uaDB.Windows.v10.Edge.v87.Standard,
			...uaDB.Windows.v10.InternetExplorer.v11.Standard,
			...uaDB.Windows.v10.Firefox.v83.Standard,
			...uaDB.Windows.v10.Opera.v72.Standard,
			...uaDB.Windows.v10.Yandex.v20.Standard,
			...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
			...uaDB.Windows.v10.Vivaldi.v3_5.Standard,
			...uaDB.WindowsMobile.Edge.v40.Standard,
			...uaDB.Xbox.Edge.v44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isWindows)).toBeTruthy();
			});
		});
	});
});
