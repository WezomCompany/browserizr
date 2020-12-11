import browserizr from '../../../core';
import { isEdgeIOS } from '../../../detect/browsers/edge-ios';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge browser on iOS', () => {
	describe('Should pass', () => {
		[...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeIOS)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Android_10.EdgeAndroid_45.Standard,
			...uaDB.MacOS_11.Edge_87.Standard,
			...uaDB.Windows_10.Edge_87.Standard,
			...uaDB.Windows_Mobile.Edge_40.Standard,
			...uaDB.Xbox.Edge_44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeIOS)).toBeFalsy();
			});
		});
	});
});
