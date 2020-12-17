import browserizr, { isEdge } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.MacOS.v11.Edge),
			...deepFlatFromObject(uaDB.Windows.v10.Edge),
			...deepFlatFromObject(uaDB.WindowsMobile.Edge),
			...deepFlatFromObject(uaDB.Xbox.Edge)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdge)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[...deepFlatFromObject(uaDB.Android), ...deepFlatFromObject(uaDB.iOS)].forEach(
			(ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdge)).toBeFalsy();
				});
			}
		);
	});
});
