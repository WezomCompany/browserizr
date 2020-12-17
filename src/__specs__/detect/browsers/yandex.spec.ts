import browserizr, { isYandex } from '../../../index';
import { uaDB } from '../../db';

describe('Detect Yandex Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Android.v11.Yandex.v20.Standard,
			...uaDB.iOS.v14.Yandex.v20.iPad,
			...uaDB.iOS.v14.Yandex.v20.iPhone,
			...uaDB.iOS.v14.Yandex.v20.iPod,
			...uaDB.MacOS.v11.Yandex.v20.Standard,
			...uaDB.Windows.v10.Yandex.v20.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isYandex)).toBeTruthy();
			});
		});
	});
});
