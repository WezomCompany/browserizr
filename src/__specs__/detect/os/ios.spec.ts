import browserizr, { isIOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect iOS', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.iOS)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isIOS)).toBeTruthy();
			});
		});
	});
});
