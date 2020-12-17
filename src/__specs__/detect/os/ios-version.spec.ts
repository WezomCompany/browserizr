import browserizr, {
	EQUAL,
	isIOSVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect iOS version', () => {
	describe('iOS 11', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
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
					expect(
						browserizr.detect(isIOSVersion(MORE_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.iOS.v11.Firefox.v29.iPad,
				...uaDB.iOS.v11.Firefox.v29.iPhone,
				...uaDB.iOS.v11.Firefox.v29.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIOSVersion(EQUAL, 11))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v11.Firefox.v29.iPad,
				...uaDB.iOS.v11.Firefox.v29.iPhone,
				...uaDB.iOS.v11.Firefox.v29.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIOSVersion(LESS_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});
	});

	describe('iOS 14', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
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
					expect(
						browserizr.detect(isIOSVersion(MORE_THEN_OR_EQUAL, 14))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
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
					expect(browserizr.detect(isIOSVersion(EQUAL, 14))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
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
					expect(
						browserizr.detect(isIOSVersion(LESS_THEN_OR_EQUAL, 14))
					).toBeTruthy();
				});
			});
		});
	});
});
