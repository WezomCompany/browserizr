import browserizr, {
	EQUAL,
	isVivaldiVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Vivaldi Browser version', () => {
	describe('Vivaldi 3.4', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Linux.Vivaldi.v3_4.Standard,
				...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isVivaldiVersion(MORE_THEN_OR_EQUAL, 3.4))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.Linux.Vivaldi.v3_4.Standard,
				...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isVivaldiVersion(EQUAL, 3.4))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Linux.Vivaldi.v3_4.Standard,
				...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isVivaldiVersion(LESS_THEN_OR_EQUAL, 3.4))
					).toBeTruthy();
				});
			});
		});
	});

	describe('Vivaldi 3.5', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[...uaDB.Windows.v10.Vivaldi.v3_5.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isVivaldiVersion(MORE_THEN_OR_EQUAL, 3.5))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...uaDB.Windows.v10.Vivaldi.v3_5.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isVivaldiVersion(EQUAL, 3.5))).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.Linux.Vivaldi.v3_4.Standard,
				...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
				...uaDB.Windows.v10.Vivaldi.v3_5.Standard
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isVivaldiVersion(LESS_THEN_OR_EQUAL, 3.5))
					).toBeTruthy();
				});
			});
		});
	});
});
