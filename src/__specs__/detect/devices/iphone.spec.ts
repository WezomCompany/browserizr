import browserizr, { isIPhone } from '../../../index';
import { uaDB } from '../../db';

describe('Detect iPhone device', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v11.Firefox.v29.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.EdgeIOS.v45.iPhone,
			...uaDB.iOS.v14.Safari.v14.iPhone,
			...uaDB.iOS.v14.Yandex.v20.iPhone
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIPhone)).toBeTruthy();
			});
		});
	});
});
