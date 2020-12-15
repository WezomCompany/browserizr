import browserizr from '../../../core';
import { isDesktop } from '../../../detect/devices/desktop';
import { uaDB } from '../../db';

describe('Detect desktop device', () => {
	describe('Should pass', () => {
		[
			...uaDB.Linux.Chrome.v87.Standard,
			...uaDB.Linux.Firefox.v83.Standard,
			...uaDB.Linux.Opera.v72.Standard,
			...uaDB.Linux.Vivaldi.v3_4.Standard,
			...uaDB.MacOS.v11.Chrome.v87.Standard,
			...uaDB.MacOS.v11.Edge.v87.Standard,
			...uaDB.MacOS.v11.Firefox.v83.Standard,
			...uaDB.MacOS.v11.Opera.v72.Standard,
			...uaDB.MacOS.v11.Safari.v14.Standard,
			...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
			...uaDB.MacOS.v11.Yandex.v20.Standard,
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
			...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
			...uaDB.Windows.v10.Vivaldi.v3_5.Standard,
			...uaDB.Windows.v10.Yandex.v20.Standard,
			...uaDB.Xbox.Edge.v44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isDesktop)).toBeTruthy();
			});
		});
	});
	describe('Should not pass', () => {
		[
			...uaDB.Android.v10.Chrome.v85.Standard,
			...uaDB.Android.v10.Chrome.v87.Standard,
			...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
			...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
			...uaDB.Android.v10.Edge.v45.Standard,
			...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
			...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
			...uaDB.Android.v10.Opera.v60.Standard,
			...uaDB.Android.v10.Opera.v61.Standard,
			...uaDB.Android.v11.Firefox.v83.Standard,
			...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
			...uaDB.Android.v11.Yandex.v20.Standard,
			...uaDB.iOS.v11.Firefox.v29.iPad,
			...uaDB.iOS.v11.Firefox.v29.iPhone,
			...uaDB.iOS.v11.Firefox.v29.iPod,
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPod,
			...uaDB.iOS.v14.Edge.v45.iPhone,
			...uaDB.iOS.v14.Safari.v14.iPad,
			...uaDB.iOS.v14.Safari.v14.iPhone,
			...uaDB.iOS.v14.Safari.v14.iPod,
			...uaDB.iOS.v14.Yandex.v20.iPad,
			...uaDB.iOS.v14.Yandex.v20.iPhone,
			...uaDB.iOS.v14.Yandex.v20.iPod,
			...uaDB.WindowsMobile.Edge.v40.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isDesktop)).toBeFalsy();
			});
		});
	});
});
