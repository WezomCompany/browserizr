import { isFirefoxAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Android Browser versions', () => {
	testVersionsListHelper(isFirefoxAndroidVersion, [
		{
			version: 82,
			values: [...deepFlatFromObject(uaDB.Android.v10.Firefox.v82)]
		},
		{
			version: 83,
			values: [...deepFlatFromObject(uaDB.Android.v11.Firefox.v83)]
		},
		{
			version: 84,
			values: [...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)]
		}
	]);
});
