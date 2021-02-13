import { isChromeAndroid } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Google Chrome Browser on Android OS', () => {
	testHelper(
		isChromeAndroid,
		[...deepFlatFromObject(uaDB.Android.v10.Chrome)],
		[
			...deepFlatFromObject({
				v10: {
					...uaDB.Android.v10,
					Chrome: null
				},
				v11: {
					...uaDB.Android.v11,
					Chrome: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Chrome: null
				}
			}),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.macOS),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.WindowsMobile)
		]
	);
});
