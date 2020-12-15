import browserizr from '../../../core';
import { isOpera } from '../../../detect/browsers/opera';
import { uaDB } from '../../db';

describe('Detect Opera Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
			...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
			...uaDB.Android.v10.Opera.v60.Standard,
			...uaDB.Android.v10.Opera.v61.Standard,
			...uaDB.Linux.Opera.v72.Standard,
			...uaDB.MacOS.v11.Opera.v72.Standard,
			...uaDB.Windows.v10.Opera.v72.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isOpera)).toBeTruthy();
			});
		});
	});
});
