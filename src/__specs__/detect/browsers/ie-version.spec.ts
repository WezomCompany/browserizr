import browserizr from '../../../core';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../../utils';
import { isIEVersion } from '../../../detect/browsers/ie-version';
import { uaDB } from '../../db';

describe('Detect Internet Explorer browser version', () => {
	describe('Internet Explorer 8', () => {
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
				...uaDB.Windows_10.InternetExplorer_v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(MORE_THEN_OR_EQUAL, 8))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows_XP.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v8.Standard,
				...uaDB.Windows_7.InternetExplorer_v8.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 8))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_XP.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v8.Standard,
				...uaDB.Windows_7.InternetExplorer_v8.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(LESS_THEN_OR_EQUAL, 8))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Internet Explorer 9', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v10.Standard,
				...uaDB.Windows_7.InternetExplorer_v11.Standard,
				...uaDB.Windows_8.InternetExplorer_v10.Standard,
				...uaDB.Windows_8.InternetExplorer_v11.Standard,
				...uaDB.Windows_8_1.InternetExplorer_v11.Standard,
				...uaDB.Windows_10.InternetExplorer_v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(MORE_THEN_OR_EQUAL, 9))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v9.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 9))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_XP.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v8.Standard,
				...uaDB.Windows_7.InternetExplorer_v9.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(LESS_THEN_OR_EQUAL, 9))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Internet Explorer 10', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_7.InternetExplorer_v10.Standard,
				...uaDB.Windows_7.InternetExplorer_v11.Standard,
				...uaDB.Windows_8.InternetExplorer_v10.Standard,
				...uaDB.Windows_8.InternetExplorer_v11.Standard,
				...uaDB.Windows_8_1.InternetExplorer_v11.Standard,
				...uaDB.Windows_10.InternetExplorer_v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(MORE_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows_7.InternetExplorer_v10.Standard,
				...uaDB.Windows_8.InternetExplorer_v10.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 10))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_XP.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v8.Standard,
				...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v8.Standard,
				...uaDB.Windows_7.InternetExplorer_v9.Standard,
				...uaDB.Windows_7.InternetExplorer_v10.Standard,
				...uaDB.Windows_8.InternetExplorer_v10.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Internet Explorer 11', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows_7.InternetExplorer_v11.Standard,
				...uaDB.Windows_8.InternetExplorer_v11.Standard,
				...uaDB.Windows_8_1.InternetExplorer_v11.Standard,
				...uaDB.Windows_10.InternetExplorer_v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(MORE_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Windows_7.InternetExplorer_v11.Standard,
				...uaDB.Windows_8.InternetExplorer_v11.Standard,
				...uaDB.Windows_8_1.InternetExplorer_v11.Standard,
				...uaDB.Windows_10.InternetExplorer_v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 11))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
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
				...uaDB.Windows_10.InternetExplorer_v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isIEVersion(LESS_THEN_OR_EQUAL, 11))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Windows_Mobile.Edge_40.Standard,
			...uaDB.Windows_Vista.InternetExplorer_v9.Standard,
			...uaDB.Windows_7.InternetExplorer_v9.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIEVersion(LESS_THEN_OR_EQUAL, 8))).toBeFalsy();
			});
		});
	});
});
