import { isFirefoxAndroid } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Android Browser', () => {
	testHelper(
		isFirefoxAndroid,
		[
			...deepFlatFromObject(uaDB.Android.v10.Firefox),
			...deepFlatFromObject(uaDB.Android.v11.Firefox)
		],
		[
			...deepFlatFromObject({
				...uaDB,
				Android: {
					...uaDB.Android,
					v10: {
						...uaDB.Android.v11,
						Firefox: null
					},
					v11: {
						...uaDB.Android.v11,
						Firefox: null
					}
				}
			})
		]
	);
});
