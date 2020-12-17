import browserizr, {
	EQUAL,
	isYandexVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Yandex Browser version', () => {
	describe('Yandex 20', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v14.Yandex.v20.iPad,
				...uaDB.iOS.v14.Yandex.v20.iPhone,
				...uaDB.iOS.v14.Yandex.v20.iPod,
				...uaDB.MacOS.v11.Yandex.v20.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isYandexVersion(MORE_THEN_OR_EQUAL, 20))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.iOS.v14.Yandex.v20.iPad,
				...uaDB.iOS.v14.Yandex.v20.iPhone,
				...uaDB.iOS.v14.Yandex.v20.iPod,
				...uaDB.MacOS.v11.Yandex.v20.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isYandexVersion(EQUAL, 20))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v14.Yandex.v20.iPad,
				...uaDB.iOS.v14.Yandex.v20.iPhone,
				...uaDB.iOS.v14.Yandex.v20.iPod,
				...uaDB.MacOS.v11.Yandex.v20.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isYandexVersion(LESS_THEN_OR_EQUAL, 20))
					).toBeTruthy();
				});
			});
		});
	});
});
