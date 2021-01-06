import { isEdgeAndroid } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Android Browser', () => {
	testHelper(
		isEdgeAndroid,
		[...deepFlatFromObject(uaDB.Android.v10.EdgeAndroid)],
		[
			...deepFlatFromObject({
				...uaDB.Android,
				v10: {
					...uaDB.Android.v10,
					EdgeAndroid: null
				}
			}),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile)
		]
	);
});
