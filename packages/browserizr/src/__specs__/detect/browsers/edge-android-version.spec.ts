import { isEdgeAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Android Browser versions', () => {
	testVersionsListHelper(isEdgeAndroidVersion, [
		{
			version: 45,
			values: [...deepFlatFromObject(uaDB.Android.v10.EdgeAndroid.v45)]
		}
	]);
});
