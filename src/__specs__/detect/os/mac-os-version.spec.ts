import { EQUAL, isMacOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';
import browserizr from '../../../core';

describe('Detect macOS version', () => {
	describe(`Should not pass. Wrong version`, () => {
		const version = 'XX' as 'Big Sur';
		[...deepFlatFromObject(uaDB.macOS['Big Sur'].Safari.v14)].forEach((ua, i) => {
			test(`Case #${++i}: ${ua}`, () => {
				browserizr.setUA(ua);
				expect(browserizr.detect(isMacOSVersion(EQUAL, version))).toBeFalsy();
			});
		});
	});

	testVersionsListHelper(isMacOSVersion, [
		{
			version: 'Snow Leopard',
			values: [...deepFlatFromObject(uaDB.macOS['Snow Leopard'])]
		},
		{
			version: 'Lion',
			values: [...deepFlatFromObject(uaDB.macOS.Lion)]
		},
		{
			version: 'Mountain Lion',
			values: [...deepFlatFromObject(uaDB.macOS['Mountain Lion'])]
		},
		{
			version: 'Mavericks',
			values: [...deepFlatFromObject(uaDB.macOS.Mavericks)]
		},
		{
			version: 'Yosemite',
			values: [...deepFlatFromObject(uaDB.macOS.Yosemite)]
		},
		{
			version: 'El Capitan',
			values: [...deepFlatFromObject(uaDB.macOS['El Capitan'])]
		},
		{
			version: 'Sierra',
			values: [...deepFlatFromObject(uaDB.macOS.Sierra)]
		},
		{
			version: 'High Sierra',
			values: [...deepFlatFromObject(uaDB.macOS['High Sierra'])]
		},
		{
			version: 'Mojave',
			values: [...deepFlatFromObject(uaDB.macOS.Mojave)]
		},
		{
			version: 'Catalina',
			values: [...deepFlatFromObject(uaDB.macOS.Catalina)]
		},
		{
			version: 'Big Sur',
			values: [...deepFlatFromObject(uaDB.macOS['Big Sur'])]
		}
	]);
});
