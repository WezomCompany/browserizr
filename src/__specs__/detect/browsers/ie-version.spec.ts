import browserizr, { isIEVersion, MORE_THEN_OR_EQUAL } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Internet Explorer Browser version', () => {
	describe(`Should not pass. IE 12 not exist`, () => {
		[
			...deepFlatFromObject(uaDB.Windows.XP.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.Vista.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v7.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v8.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v8_1.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v10.InternetExplorer)
		].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(
					browserizr.detect(isIEVersion(MORE_THEN_OR_EQUAL, 12 as 8))
				).toBeFalsy();
			});
		});
	});

	testVersionsListHelper<8 | 9 | 10 | 11>(isIEVersion, [
		{
			version: 8,
			values: [
				...deepFlatFromObject(uaDB.Windows.XP.InternetExplorer.v8),
				...deepFlatFromObject(uaDB.Windows.Vista.InternetExplorer.v8),
				...deepFlatFromObject(uaDB.Windows.v7.InternetExplorer.v8)
			]
		},
		{
			version: 9,
			values: [
				...deepFlatFromObject(uaDB.Windows.Vista.InternetExplorer.v9),
				...deepFlatFromObject(uaDB.Windows.v7.InternetExplorer.v9)
			]
		},
		{
			version: 10,
			values: [
				...deepFlatFromObject(uaDB.Windows.v7.InternetExplorer.v10),
				...deepFlatFromObject(uaDB.Windows.v8.InternetExplorer.v10)
			]
		},
		{
			version: 11,
			values: [
				...deepFlatFromObject(uaDB.Windows.v7.InternetExplorer.v11),
				...deepFlatFromObject(uaDB.Windows.v8.InternetExplorer.v11),
				...deepFlatFromObject(uaDB.Windows.v8_1.InternetExplorer.v11),
				...deepFlatFromObject(uaDB.Windows.v10.InternetExplorer.v11)
			]
		}
	]);
});
