import { isSafariVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser versions', () => {
	testVersionsListHelper(isSafariVersion, [
		{
			version: 4,
			values: [...deepFlatFromObject(uaDB.macOS['Snow Leopard'].Safari.v4)]
		},
		{
			version: 5,
			values: [
				...deepFlatFromObject(uaDB.macOS['Snow Leopard'].Safari.v5),
				...deepFlatFromObject(uaDB.macOS.Lion.Safari.v5)
			]
		},
		{
			version: 6,
			values: [
				...deepFlatFromObject(uaDB.macOS.Lion.Safari.v6),
				...deepFlatFromObject(uaDB.macOS['Mountain Lion'].Safari.v6)
			]
		},
		{
			version: 7,
			values: [...deepFlatFromObject(uaDB.macOS.Mavericks.Safari.v7)]
		},
		{
			version: 8,
			values: [...deepFlatFromObject(uaDB.macOS.Yosemite.Safari.v8)]
		},
		{
			version: 9,
			values: [...deepFlatFromObject(uaDB.macOS['El Capitan'].Safari.v9)]
		},
		{
			version: 10,
			values: [...deepFlatFromObject(uaDB.macOS.Sierra.Safari.v10)]
		},
		{
			version: 11,
			values: [...deepFlatFromObject(uaDB.macOS['High Sierra'].Safari.v11)]
		},
		{
			version: 12,
			values: [...deepFlatFromObject(uaDB.macOS.Mojave.Safari.v12)]
		},
		{
			version: 13,
			values: [...deepFlatFromObject(uaDB.macOS.Catalina.Safari.v13)]
		},
		{
			version: 14,
			values: [...deepFlatFromObject(uaDB.macOS['Big Sur'].Safari.v14)]
		}
	]);
});
