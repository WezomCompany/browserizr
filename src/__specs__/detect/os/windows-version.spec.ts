import browserizr, {
	EQUAL,
	isWindowsVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Windows OS Version', () => {
	describe('Windows XP', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
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
			[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 'XP'))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'XP'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 'XP'))).toBeFalsy();
				});
			});
		});

		describe(`XX Should not be ${EQUAL}`, () => {
			const version = 'XX' as 'XP';
			[...deepFlatFromObject(uaDB.Windows.XP)].forEach((ua, i) => {
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
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
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
			[...deepFlatFromObject(uaDB.Windows.Vista)].forEach((ua, i) => {
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
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 'Vista'))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(EQUAL, 'Vista'))
					).toBeFalsy();
				});
			});
		});
	});
	describe('Windows 7', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
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
			[...deepFlatFromObject(uaDB.Windows.v7)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 7))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 7))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 7))).toBeFalsy();
				});
			});
		});
	});
	describe('Windows 8', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
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
			[...deepFlatFromObject(uaDB.Windows.v8)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 8))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 8))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 8))).toBeFalsy();
				});
			});
		});
	});

	describe('Windows 8.1', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
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
			[...deepFlatFromObject(uaDB.Windows.v8_1)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 8.1))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 8.1))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v10)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 8.1))).toBeFalsy();
				});
			});
		});
	});

	describe('Windows 10', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Windows.v10)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(MORE_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Windows.v10)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 10))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1),
				...deepFlatFromObject(uaDB.Windows.v10)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isWindowsVersion(LESS_THEN_OR_EQUAL, 10))
					).toBeTruthy();
				});
			});
		});

		describe(`Should not be ${EQUAL}`, () => {
			[
				...deepFlatFromObject(uaDB.Windows.XP),
				...deepFlatFromObject(uaDB.Windows.Vista),
				...deepFlatFromObject(uaDB.Windows.v7),
				...deepFlatFromObject(uaDB.Windows.v8),
				...deepFlatFromObject(uaDB.Windows.v8_1)
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isWindowsVersion(EQUAL, 10))).toBeFalsy();
				});
			});
		});
	});
});
