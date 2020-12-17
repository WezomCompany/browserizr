import browserizr, {
	EQUAL,
	isIEVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Internet Explorer Browser version', () => {
	describe('Internet Explorer 8', () => {
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
				...uaDB.Windows.v10.InternetExplorer.v11.Standard
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
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 8))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard
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
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard
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
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 9))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Windows.XP.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v8.Standard,
				...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
				...uaDB.Windows.v7.InternetExplorer.v8.Standard,
				...uaDB.Windows.v7.InternetExplorer.v9.Standard
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
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard
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
				...uaDB.Windows.v7.InternetExplorer.v10.Standard,
				...uaDB.Windows.v8.InternetExplorer.v10.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 10))).toBeTruthy();
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
				...uaDB.Windows.v8.InternetExplorer.v10.Standard
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
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard
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
				...uaDB.Windows.v7.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8.InternetExplorer.v11.Standard,
				...uaDB.Windows.v8_1.InternetExplorer.v11.Standard,
				...uaDB.Windows.v10.InternetExplorer.v11.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isIEVersion(EQUAL, 11))).toBeTruthy();
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
				...uaDB.Windows.v10.InternetExplorer.v11.Standard
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
			...uaDB.WindowsMobile.Edge.v40.Standard,
			...uaDB.Windows.Vista.InternetExplorer.v9.Standard,
			...uaDB.Windows.v7.InternetExplorer.v9.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIEVersion(LESS_THEN_OR_EQUAL, 8))).toBeFalsy();
			});
		});
	});
});
