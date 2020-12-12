import browserizr from '../../../core';
import { isOpera } from '../../../detect/browsers/opera';
import { uaDB } from '../../db';

describe('Detect Opera browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android_10.Opera_59['Opera on Huawei'],
			...uaDB.Android_10.Opera_59['Opera on Sumsung'],
			...uaDB.Android_10.Opera_60.Standard,
			...uaDB.Android_10.Opera_61.Standard,
			...uaDB.Linux.Opera_72.Standard,
			...uaDB.MacOS_11.Opera_72.Standard,
			...uaDB.Windows_10.Opera_72.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isOpera)).toBeTruthy();
			});
		});
	});
});
