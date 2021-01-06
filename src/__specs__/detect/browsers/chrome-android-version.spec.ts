import { isChromeAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Google Chrome Android Browser versions', () => {
	testVersionsListHelper(isChromeAndroidVersion, [
		{
			version: 85,
			values: [...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)]
		},
		{
			version: 87,
			values: [...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)]
		}
	]);
});
