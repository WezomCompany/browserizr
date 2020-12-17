import browserizr, {
	EQUAL,
	isEdgeAndroidVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser version on Android', () => {
	describe('Edge Android 45', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v10.Edge.v45)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(MORE_THEN_OR_EQUAL, 45))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v10.Edge.v45)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(EQUAL, 45))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[...deepFlatFromObject(uaDB.Android.v10.Edge.v45)].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isEdgeAndroidVersion(LESS_THEN_OR_EQUAL, 45))
					).toBeTruthy();
				});
			});
		});
	});
});
