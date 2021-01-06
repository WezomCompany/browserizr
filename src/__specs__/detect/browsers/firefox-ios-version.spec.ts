import { isFirefoxIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox iOS Browser versions', () => {
	testVersionsListHelper(isFirefoxIOSVersion, [
		{
			version: 29,
			values: [...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)]
		}
	]);
});
