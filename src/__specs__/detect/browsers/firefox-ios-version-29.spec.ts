import browserizr, {
	EQUAL,
	isFirefoxIOSVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Mozilla Firefox iOS Browser 29 version', () => {
	describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29))
				).toBeTruthy();
			});
		});
	});
	describe(`Should be ${EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOSVersion(EQUAL, 29))).toBeTruthy();
			});
		});
	});

	describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isFirefoxIOSVersion(LESS_THEN_OR_EQUAL, 29))
				).toBeTruthy();
			});
		});
	});
});
