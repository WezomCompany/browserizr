import { isMacOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect macOS version', () => {
	testVersionsListHelper(isMacOSVersion, [
		{
			version: 11,
			values: [...deepFlatFromObject(uaDB.MacOS.v11)]
		}
	]);
});
