import { isChromeIOS } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Google Chrome Browser on iOS', () => {
	testHelper(
		isChromeIOS,
		[...deepFlatFromObject(uaDB.iOS.v14.Chrome)],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject({
				v11: {
					...uaDB.iOS.v11,
					Chrome: null
				},
				v14: {
					...uaDB.iOS.v14,
					Chrome: null
				}
			}),
			...deepFlatFromObject(uaDB.macOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
