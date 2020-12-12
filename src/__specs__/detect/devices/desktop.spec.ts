import browserizr from '../../../core';
import { isDesktop } from '../../../detect/devices/desktop';
import { uaDB } from '../../db';

describe('Detect desktop device', () => {
	describe('Should pass', () => {
		[
			...uaDB.Linux.Chrome_87.Standard,
			...uaDB.Linux.Firefox_83.Standard,
			...uaDB.Linux.Opera_72.Standard,
			...uaDB.Linux.Vivaldi_3_4.Standard,
			...uaDB.MacOS_11.Chrome_87.Standard,
			...uaDB.MacOS_11.Edge_87.Standard,
			...uaDB.MacOS_11.Firefox_83.Standard,
			...uaDB.MacOS_11.Opera_72.Standard,
			...uaDB.MacOS_11.Safari_14.Standard,
			...uaDB.MacOS_11.Vivaldi_3_4.Standard,
			...uaDB.MacOS_11.Yandex_20.Standard,
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
			...uaDB.Windows_10.Chrome_87.Standard,
			...uaDB.Windows_10.Edge_87.Standard,
			...uaDB.Windows_10.InternetExplorer_v11.Standard,
			...uaDB.Windows_10.Firefox_83.Standard,
			...uaDB.Windows_10.Opera_72.Standard,
			...uaDB.Windows_10.Vivaldi_3_4.Standard,
			...uaDB.Windows_10.Vivaldi_3_5.Standard,
			...uaDB.Windows_10.Yandex_20.Standard,
			...uaDB.Xbox.Edge_44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isDesktop)).toBeTruthy();
			});
		});
	});
	describe('Should not pass', () => {
		[
			...uaDB.Android_10.Chrome_85.Standard,
			...uaDB.Android_10.Chrome_87.Standard,
			...uaDB.Android_10.Chrome_87['Chrome on Lg'],
			...uaDB.Android_10.Chrome_87['Chrome on Samsung'],
			...uaDB.Android_10.EdgeAndroid_45.Standard,
			...uaDB.Android_10.Opera_59['Opera on Huawei'],
			...uaDB.Android_10.Opera_59['Opera on Sumsung'],
			...uaDB.Android_10.Opera_60.Standard,
			...uaDB.Android_10.Opera_61.Standard,
			...uaDB.Android_11.Firefox_83.Standard,
			...uaDB.Android_11.Firefox_83['Firefox on Lg'],
			...uaDB.Android_11.Yandex_20.Standard,
			...uaDB.iPad_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPad_iOS_14.Safari_14.Standard,
			...uaDB.iPad_iOS_14.Yandex_20.Standard,
			...uaDB.iPhone_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard,
			...uaDB.iPhone_iOS_14.Safari_14.Standard,
			...uaDB.iPhone_iOS_14.Yandex_20.Standard,
			...uaDB.iPod_iOS_11.FirefoxIOS_29.Standard,
			...uaDB.iPod_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPod_iOS_14.Safari_14.Standard,
			...uaDB.iPod_iOS_14.Yandex_20.Standard,
			...uaDB.Windows_Mobile.Edge_40.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isDesktop)).toBeFalsy();
			});
		});
	});
});
