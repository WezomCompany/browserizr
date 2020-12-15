import browserizr from '../../../core';
import { isIPad } from '../../../detect/devices/ipad';
import { uaDB } from '../../db';

describe('Detect iPad device', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v11.Firefox.v29.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Safari.v14.iPad,
			...uaDB.iOS.v14.Yandex.v20.iPad
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIPad)).toBeTruthy();
			});
		});
	});
});
