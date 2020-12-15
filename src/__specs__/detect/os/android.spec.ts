import browserizr from '../../../core';
import { isAndroid } from '../../../detect/os/android';
import { uaDB } from '../../db';

describe('Detect Android OS', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android.v10.Chrome.v85.Standard,
			...uaDB.Android.v10.Chrome.v87.Standard,
			...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
			...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
			...uaDB.Android.v10.Edge.v45.Standard,
			...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
			...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
			...uaDB.Android.v11.Firefox.v83.Standard,
			...uaDB.Android.v11.Firefox.v83['Firefox on Lg'],
			...uaDB.Android.v11.Yandex.v20.Standard,
			...uaDB.WindowsMobile.Edge.v40.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isAndroid)).toBeTruthy();
			});
		});
	});
});
