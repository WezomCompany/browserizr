import browserizr from '../../../core';
import { isEdge } from '../../../detect/browsers/edge';
import { uaDB } from '../../db';

describe('Detect Microsoft Edge browser', () => {
	describe('Should pass', () => {
		[
			...uaDB.MacOS_11.Edge_87.Standard,
			...uaDB.Windows_10.Edge_87.Standard,
			...uaDB.Windows_Mobile.Edge_40.Standard,
			...uaDB.Xbox.Edge_44.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdge)).toBeTruthy();
			});
		});
	});

	describe('Should not pass', () => {
		[
			...uaDB.Android_10.EdgeAndroid_45.Standard,
			...uaDB.iPhone_iOS_14.EdgeIOS_45.Standard
		].forEach((ua, i) => {
			test(`Case #${++i}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isEdge)).toBeFalsy();
			});
		});
	});
});
