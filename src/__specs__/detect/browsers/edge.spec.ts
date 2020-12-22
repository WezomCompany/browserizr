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
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject({
				...uaDB.MacOS,
				v11: {
					...uaDB.MacOS.v11,
					Edge: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Edge: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.WindowsMobile,
				Edge: null
			}),
			...deepFlatFromObject({
				...uaDB.Xbox,
				Edge: null
			})
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdge)).toBeFalsy();
			});
		});
	});
});
