import browserizr, {
	EQUAL,
	isWindowsVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Windows OS Version', () => {
	describe('Windows XP', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
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
			[...uaDB.Windows.XP.InternetExplorer.v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 'XP'))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows.XP.InternetExplorer.v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'XP'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${MORE_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows.XP.InternetExplorer.v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'Vista'))
					).toBeFalsy();
				});
			});
		});

		describe(`XX Should not be ${EQUAL}`, () => {
			const version = 'XX' as 'XP';
			[...uaDB.Windows.XP.InternetExplorer.v8.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(EQUAL, version))
					).toBeFalsy();
				});
			});
		});

		describe(`Should not pass at all`, () => {
			[...uaDB.MacOS.v11.Safari.v14.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeFalsy();
				});
			});
		});
	});
	describe('Windows Vista', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 'Vista'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(EQUAL, 'Vista'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'Vista'))
					).toBeTruthy();
				});
			});
		});
	});
	describe('Windows 7', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 7))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 7))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 7))
					).toBeTruthy();
				});
			});
		});
	});
	describe('Windows 8', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 8))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 8))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 8))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Windows 8.1', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 8.1))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Windows.v8_1.InternetExplorer.v11.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 8.1))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 8.1))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Windows 10', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 10))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Chrome.v87.Standard,
				...uaDB.Windows.v10.Edge.v87.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.Firefox.v83.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard,
				...uaDB.Windows.v10.Yandex.v20.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});
	});
});
