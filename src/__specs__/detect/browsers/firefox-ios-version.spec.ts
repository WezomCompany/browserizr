import browserizr, {
	EQUAL,
	isFirefoxIOSVersion,
	LESS_THEN_OR_EQUAL,
	MORE_THEN_OR_EQUAL
} from '../../../index';
import { uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser version on iOS', () => {
	describe('Mozilla Firefox 29 on iOS', () => {
		describe(`Should be ${MORE_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v11.Firefox.v29.iPad,
				...uaDB.iOS.v11.Firefox.v29.iPhone,
				...uaDB.iOS.v11.Firefox.v29.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29))
					).toBeTruthy();
				});
			});
		});
		describe(`Should be ${EQUAL}`, () => {
			[
				...uaDB.iOS.v11.Firefox.v29.iPad,
				...uaDB.iOS.v11.Firefox.v29.iPhone,
				...uaDB.iOS.v11.Firefox.v29.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(EQUAL, 29))
					).toBeTruthy();
				});
			});
		});

		describe(`Should be ${LESS_THEN_OR_EQUAL}`, () => {
			[
				...uaDB.iOS.v11.Firefox.v29.iPad,
				...uaDB.iOS.v11.Firefox.v29.iPhone,
				...uaDB.iOS.v11.Firefox.v29.iPod
			].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(LESS_THEN_OR_EQUAL, 29))
					).toBeTruthy();
				});
			});
		});

		describe('Should not pass', () => {
			[...uaDB.Windows.v10.Firefox.v83.Standard].forEach((ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(
						browserizr.detect(isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29))
					).toBeFalsy();
				});
			});
		});
	});
});
