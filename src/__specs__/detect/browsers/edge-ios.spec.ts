import browserizr, { isEdgeIOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Microsoft Edge iOS Browser', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject({
				...uaDB.iOS,
				v14: {
					...uaDB.iOS.v14,
					EdgeIOS: null
				}
			}),
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
