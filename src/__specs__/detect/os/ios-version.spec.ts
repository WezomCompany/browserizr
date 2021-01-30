import { isIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect iOS versions', () => {
	testVersionsListHelper(isIOSVersion, [
		{
			version: 11,
			values: [...deepFlatFromObject(uaDB.iOS.v11)]
		},
		{
			version: 12,
			values: [...deepFlatFromObject(uaDB.iOS.v12)]
		},
		{
			version: 13,
			values: [...deepFlatFromObject(uaDB.iOS.v13)]
		},
		{
			version: 14,
			values: [...deepFlatFromObject(uaDB.iOS.v14)]
		}
	]);
});
