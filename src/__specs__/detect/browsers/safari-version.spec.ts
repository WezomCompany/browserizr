import { isSafariVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser versions', () => {
	testVersionsListHelper(isSafariVersion, [
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
