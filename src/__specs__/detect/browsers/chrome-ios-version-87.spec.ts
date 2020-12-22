import browserizr, {
	EQUAL,
	isChromeIOSVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Google Chrome iOS Browser 87 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isChromeIOSVersion(MORE_THEN_OR_EQUAL, 87))
				).toBeTruthy();
			});
		});
	});
	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isChromeIOSVersion(EQUAL, 87))).toBeTruthy();
			});
		});
	});
	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isChromeIOSVersion(LESS_THEN_OR_EQUAL, 87))
				).toBeTruthy();
			});
		});
	});
});
