import browserizr, { isEdgeIOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser on iOS', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.iOS.v14.Edge)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeIOS)).toBeFalsy();
			});
		});
	});
});
