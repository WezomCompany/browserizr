import browserizr, {
	EQUAL,
	isOperaVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Opera Browser', () => {
	describe('Opera 59', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.Linux.Opera.v72.Standard,
				...uaDB.MacOS.v11.Opera.v72.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(MORE_THEN_OR_EQUAL, 59))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung']
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isOperaVersion(EQUAL, 59))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung']
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(LESS_THEN_OR_EQUAL, 59))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Opera 60', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.Linux.Opera.v72.Standard,
				...uaDB.MacOS.v11.Opera.v72.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(MORE_THEN_OR_EQUAL, 60))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Android.v10.Opera.v60.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isOperaVersion(EQUAL, 60))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(LESS_THEN_OR_EQUAL, 60))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Opera 61', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.Linux.Opera.v72.Standard,
				...uaDB.MacOS.v11.Opera.v72.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(MORE_THEN_OR_EQUAL, 61))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Android.v10.Opera.v61.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isOperaVersion(EQUAL, 61))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(LESS_THEN_OR_EQUAL, 61))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Opera 72', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Linux.Opera.v72.Standard,
				...uaDB.MacOS.v11.Opera.v72.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(MORE_THEN_OR_EQUAL, 72))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Linux.Opera.v72.Standard,
				...uaDB.MacOS.v11.Opera.v72.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isOperaVersion(EQUAL, 72))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Android.v10.Opera.v59['Opera on Huawei'],
				...uaDB.Android.v10.Opera.v59['Opera on Sumsung'],
				...uaDB.Android.v10.Opera.v60.Standard,
				...uaDB.Android.v10.Opera.v61.Standard,
				...uaDB.Linux.Opera.v72.Standard,
				...uaDB.MacOS.v11.Opera.v72.Standard,
				...uaDB.Windows.v10.Opera.v72.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isOperaVersion(LESS_THEN_OR_EQUAL, 72))
					).toBeTruthy();
				});
			});
		});
	});
});
