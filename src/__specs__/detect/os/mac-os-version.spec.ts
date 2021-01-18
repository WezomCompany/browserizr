import { isMacOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect macOS version', () => {
	testVersionsListHelper(isMacOSVersion, [
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
