import browserizr from '../../../core';
import { isVivaldi } from '../../../detect/browsers/vivaldi';
import { uaDB } from '../../db';

describe('Detect Vivaldi Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.Linux.Vivaldi_3_4.Standard,
			...uaDB.MacOS_11.Vivaldi_3_4.Standard,
			...uaDB.Windows_10.Vivaldi_3_4.Standard,
			...uaDB.Windows_10.Vivaldi_3_5.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isVivaldi)).toBeTruthy();
			});
		});
	});
});
