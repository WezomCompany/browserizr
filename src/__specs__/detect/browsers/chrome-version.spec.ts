import browserizr, {
	EQUAL,
	isChromeVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Google Chrome Browser version', () => {
	describe('Google Chrome 87', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Linux.Chrome.v87.Standard,
				...uaDB.MacOS.v11.Chrome.v87.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeVersion(MORE_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Linux.Chrome.v87.Standard,
				...uaDB.MacOS.v11.Chrome.v87.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 87))).toBeTruthy();
				});
			});
		});
		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Linux.Chrome.v87.Standard,
				...uaDB.MacOS.v11.Chrome.v87.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isChromeVersion(LESS_THEN_OR_EQUAL, 87))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows.v10.Chrome.v87.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 88))).toBeFalsy();
				});
			});
		});

		describe(`Should not pass`, () => {
			[
				...uaDB.Android.v10.Chrome.v85.Standard,
				...uaDB.Android.v10.Chrome.v87.Standard,
				...uaDB.Android.v10.Chrome.v87['Chrome on Lg'],
				...uaDB.Android.v10.Chrome.v87['Chrome on Samsung'],
				...uaDB.Windows.v10.Yandex.v20.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isChromeVersion(EQUAL, 87))).toBeFalsy();
				});
			});
		});
	});
});
