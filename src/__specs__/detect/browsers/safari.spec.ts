import browserizr from '../../../core';
import { isSafari } from '../../../detect/browsers/safari';
import { uaDB } from '../../db';

describe('Detect Apple Safari browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.iPad_iOS_14.Safari_14.Standard,
			...uaDB.iPhone_iOS_14.Safari_14.Standard,
			...uaDB.iPod_iOS_14.Safari_14.Standard,
			...uaDB.MacOS_11.Safari_14.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafari)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Android_10.ChromeAndroid_85.Standard,
			...uaDB.Android_10.ChromeAndroid_87.Standard,
			...uaDB.Android_10.ChromeAndroid_87['Chrome on Lg'],
			...uaDB.Android_10.ChromeAndroid_87['Chrome on Samsung'],
			...uaDB.Android_10.EdgeAndroid_45.Standard,
			...uaDB.Android_10.Opera_59['Opera on Sumsung'],
			...uaDB.Android_10.Opera_59['Opera on Huawei'],
			...uaDB.Android_10.Opera_60.Standard,
			...uaDB.Android_10.Opera_61.Standard,
			...uaDB.Android_11.Yandex_20.Standard,
			...uaDB.iPad_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPad_iOS_14.Yandex_20.Standard,
			...uaDB.iPhone_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard,
			...uaDB.iPhone_iOS_14.Yandex_20.Standard,
			...uaDB.iPod_iOS_14.ChromeIOS_87.Standard,
			...uaDB.iPod_iOS_14.Yandex_20.Standard,
			...uaDB.Linux.Chrome_87.Standard,
			...uaDB.Linux.Opera_72.Standard,
			...uaDB.Linux.Vivaldi_3_4.Standard,
			...uaDB.MacOS_11.Chrome_87.Standard,
			...uaDB.MacOS_11.Edge_87.Standard,
			...uaDB.MacOS_11.Opera_72.Standard,
			...uaDB.MacOS_11.Vivaldi_3_4.Standard,
			...uaDB.MacOS_11.Yandex_20.Standard,
			...uaDB.Windows_10.Chrome_87.Standard,
			...uaDB.Windows_10.Edge_87.Standard,
			...uaDB.Windows_10.Opera_72.Standard,
			...uaDB.Windows_10.Vivaldi_3_5.Standard,
			...uaDB.Windows_10.Yandex_20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isSafari)).toBeFalsy();
			});
		});
	});
});
