import browserizr from '../../../core';
import { isEdge } from '../../../detect/browsers/edge';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge Browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.MacOS.v11.Edge.v87.Standard,
			...uaDB.Windows.v10.Edge.v87.Standard,
			...uaDB.WindowsMobile.Edge.v40.Standard,
			...uaDB.Xbox.Edge.v44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdge)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[...uaDB.Android.v10.Edge.v45.Standard, ...uaDB.iOS.v14.Edge.v45.iPhone].forEach(
			(ua, i) => {
				test(`Case #${++i}: ${ua}`, () => {
					browserizr.setUA(ua);
					expect(browserizr.detect(isEdge)).toBeFalsy();
				});
			}
		);
	});
});
