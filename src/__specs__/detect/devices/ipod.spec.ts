import browserizr from '../../../core';
import { isIPod } from '../../../detect/devices/ipod';
import { uaDB } from '../../db';

describe('Detect isIPod device', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v11.Firefox.v29.iPod,
			...uaDB.iOS.v14.Chrome.v87.iPod,
			...uaDB.iOS.v14.Safari.v14.iPod,
			...uaDB.iOS.v14.Yandex.v20.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIPod)).toBeTruthy();
			});
		});
	});
});
