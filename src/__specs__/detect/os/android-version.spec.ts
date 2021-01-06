import { isAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Android OS versions', () => {
	testVersionsListHelper(isAndroidVersion, [
		{
			version: 10,
			values: [...deepFlatFromObject(uaDB.Android.v10)]
		},
		{
			version: 11,
			values: [...deepFlatFromObject(uaDB.Android.v11)]
		}
	]);
});
