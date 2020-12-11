import browserizr from '../../../core';
import { isEdgeAndroid } from '../../../detect/browsers/edge-android';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge browser on Android', () => {
	describe('Should pass', () => {
		[...uaDB.Android_10.EdgeAndroid_45.Standard].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeAndroid)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard,
			...uaDB.MacOS_11.Edge_87.Standard,
			...uaDB.Windows_10.Edge_87.Standard,
			...uaDB.Windows_Mobile.Edge_40.Standard,
			...uaDB.Xbox.Edge_44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdgeAndroid)).toBeFalsy();
			});
		});
	});
});
