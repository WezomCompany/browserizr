import browserizr from '../../../core';
import { isSafariIOS } from '../../../detect/browsers/safari-ios';
import { uaDB } from '../../db';

describe('Detect Apple Safari Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v14.Safari.v14.iPad,
			...uaDB.iOS.v14.Safari.v14.iPhone,
			...uaDB.iOS.v14.Safari.v14.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafariIOS)).toBeTruthy();
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
			...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
			...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
			...uaDB.Android.v10.Opera.v60.Standard,
			...uaDB.Android.v10.Opera.v61.Standard,
			...uaDB.Android.v11.Yandex.v20.Standard,
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPod,
			...uaDB.iOS.v14.Edge.v45.iPhone,
			...uaDB.iOS.v14.Yandex.v20.iPad,
			...uaDB.iOS.v14.Yandex.v20.iPhone,
			...uaDB.iOS.v14.Yandex.v20.iPod,
			...uaDB.Linux.Chrome.v87.Standard,
			...uaDB.Linux.Opera.v72.Standard,
			...uaDB.Linux.Vivaldi.v3_4.Standard,
			...uaDB.MacOS.v11.Chrome.v87.Standard,
			...uaDB.MacOS.v11.Edge.v87.Standard,
			...uaDB.MacOS.v11.Opera.v72.Standard,
			...uaDB.MacOS.v11.Safari.v14.Standard,
			...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
			...uaDB.MacOS.v11.Yandex.v20.Standard,
			...uaDB.Windows.v10.Chrome.v87.Standard,
			...uaDB.Windows.v10.Edge.v87.Standard,
			...uaDB.Windows.v10.Opera.v72.Standard,
			...uaDB.Windows.v10.Vivaldi.v3_5.Standard,
			...uaDB.Windows.v10.Yandex.v20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafariIOS)).toBeFalsy();
			});
		});
	});
});
