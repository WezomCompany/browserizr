import browserizr from '../../../core';
import { isEdgeAndroid } from '../../../detect/browsers/edge-android';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge Browser on Android', () => {
	describe('Should pass', () => {
		[...uaDB.Android.v10.Edge.v45.Standard].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.iOS.v14.Edge.v45.iPhone,
			...uaDB.MacOS.v11.Edge.v87.Standard,
			...uaDB.Windows.v10.Edge.v87.Standard,
			...uaDB.WindowsMobile.Edge.v40.Standard,
			...uaDB.Xbox.Edge.v44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeAndroid)).toBeFalsy();
			});
		});
	});
});
