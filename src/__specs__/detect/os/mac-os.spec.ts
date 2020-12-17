import browserizr, { isMacOS } from '../../../index';
import { deepFlatFromObject, uaDB } from '../../db';

describe('Detect macOS', () => {
	describe('Should pass', () => {
		[...deepFlatFromObject(uaDB.MacOS)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isMacOS)).toBeTruthy();
			});
		});
	});
});
