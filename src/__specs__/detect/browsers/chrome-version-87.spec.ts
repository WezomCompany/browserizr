import browserizr, {
	EQUAL,
	isChromeVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Google Chrome Browser 87 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Linux.Chrome.v87),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
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
			...deepFlatFromObject(uaDB.Linux.Chrome.v87),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeVersion(EQUAL, 87))).toBeTruthy();
			});
		});
	});
	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[
			...deepFlatFromObject(uaDB.Linux.Chrome.v87),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isChromeVersion(LESS_THEN_OR_EQUAL, 87))
				).toBeTruthy();
			});
		});
	});
});
