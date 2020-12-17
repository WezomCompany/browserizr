import browserizr, { isIOS } from '../../../index';
import { uaDB } from '../../db';

describe('Detect iOS', () => {
	describe('Should pass', () => {
		[
			...uaDB.iOS.v11.Firefox.v29.iPad,
			...uaDB.iOS.v11.Firefox.v29.iPhone,
			...uaDB.iOS.v11.Firefox.v29.iPod,
			...uaDB.iOS.v14.Chrome.v87.iPad,
			...uaDB.iOS.v14.Chrome.v87.iPhone,
			...uaDB.iOS.v14.Chrome.v87.iPod,
			...uaDB.iOS.v14.Safari.v14.iPad,
			...uaDB.iOS.v14.Safari.v14.iPhone,
			...uaDB.iOS.v14.Safari.v14.iPod,
			...uaDB.iOS.v14.Yandex.v20.iPad,
			...uaDB.iOS.v14.Yandex.v20.iPhone,
			...uaDB.iOS.v14.Yandex.v20.iPod
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIOS)).toBeTruthy();
			});
		});
	});
});
