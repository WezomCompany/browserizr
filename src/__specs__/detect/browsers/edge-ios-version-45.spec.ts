import browserizr, {
	EQUAL,
	isEdgeIOSVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Microsoft Edge iOS Browser 45 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isEdgeIOSVersion(MORE_THEN_OR_EQUAL, 45))
				).toBeTruthy();
			});
		});
	});

	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeIOSVersion(EQUAL, 45))).toBeTruthy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isEdgeIOSVersion(LESS_THEN_OR_EQUAL, 45))
				).toBeTruthy();
			});
		});
	});
});
