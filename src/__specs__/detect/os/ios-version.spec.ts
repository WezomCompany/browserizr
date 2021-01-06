import { isIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect iOS versions', () => {
	testVersionsListHelper(isIOSVersion, [
		{
			version: 11,
			values: [...deepFlatFromObject(uaDB.iOS.v11)]
		},
		{
			version: 14,
			values: [...deepFlatFromObject(uaDB.iOS.v14)]
		}
	]);
});
