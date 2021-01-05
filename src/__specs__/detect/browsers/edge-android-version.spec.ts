import { isEdgeAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Android Browser version', () => {
	describe(45, () => {
		testVersionGroupHelper(
			isEdgeAndroidVersion,
			45,
			[...deepFlatFromObject(uaDB.Android.v10.EdgeAndroid.v45)],
			[],
			[...deepFlatFromObject(uaDB.Android.v10.EdgeAndroid.v45)],
			[],
			[...deepFlatFromObject(uaDB.Android.v10.EdgeAndroid.v45)],
			[]
		);
	});
});
