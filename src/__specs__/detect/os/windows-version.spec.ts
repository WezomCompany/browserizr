import browserizr from '../../../core';
import { isWindowsVersion } from '../../../detect/os/windows-version';
import { uaDB } from '../../db';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';

describe('Detect Windows OS Version', () => {
	describe('Windows XP', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_XP.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v8.Standard,
				...uaDB.Windows_7.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v10.Standard,
				...uaDB.Windows_7.InternetExplorer_v11.Standard,
				...uaDB.Windows_8.InternetExplorer_v10.Standard,
				...uaDB.Windows_8.InternetExplorer_v11.Standard,
				...uaDB.Windows_8_1.InternetExplorer_v11.Standard,
				...uaDB.Windows_10.Chrome_87.Standard,
				...uaDB.Windows_10.Edge_87.Standard,
				...uaDB.Windows_10.InternetExplorer_v11.Standard,
				...uaDB.Windows_10.Firefox_83.Standard,
				...uaDB.Windows_10.Opera_72.Standard,
				...uaDB.Windows_10.Yandex_20.Standard,
				...uaDB.Windows_10.Vivaldi_3_4.Standard,
				...uaDB.Windows_10.Vivaldi_3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'XP'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Windows_XP.InternetExplorer_v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 'XP'))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows_XP.InternetExplorer_v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'XP'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows_XP.InternetExplorer_v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'Vista'))
					).toBeFalsy();
				});
			});
		});

		describe(`Should not pass at all`, () => {
			[...uaDB.MacOS_11.Safari_14.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeFalsy();
				});
			});
		});
	});
});
