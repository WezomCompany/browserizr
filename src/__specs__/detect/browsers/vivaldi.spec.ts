import browserizr from '../../../core';
import { isVivaldi } from '../../../detect/browsers/vivaldi';
import { uaDB } from '../../db';

describe('Detect Vivaldi Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Linux.Vivaldi.v3_4.Standard,
			...uaDB.MacOS.v11.Vivaldi.v3_4.Standard,
			...uaDB.Windows.v10.Vivaldi.v3_4.Standard,
			...uaDB.Windows.v10.Vivaldi.v3_5.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isVivaldi)).toBeTruthy();
			});
		});
	});
});
