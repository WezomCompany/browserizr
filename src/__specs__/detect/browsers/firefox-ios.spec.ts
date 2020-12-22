import browserizr, { isFirefoxIOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Mozilla Firefox iOS Browser', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...deepFlatFromObject({
				...uaDB,
				iOS: {
					...uaDB.iOS,
					v11: {
						...uaDB.iOS.v11,
						Firefox: null
					}
				}
			})
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isFirefoxIOS)).toBeFalsy();
			});
		});
	});
});
