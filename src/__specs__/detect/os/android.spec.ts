import browserizr, { isAndroid } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect Android OS', () => {
	describe('Should pass', () => {
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.WindowsMobile)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isAndroid)).toBeTruthy();
			});
		});
	});
});
