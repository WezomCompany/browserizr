import { isSafariIOS } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser on iOS', () => {
	testHelper(
		isSafariIOS,
		[...deepFlatFromObject(uaDB.iOS.v14.Safari.v14)],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject({
				...uaDB.iOS,
				v14: {
					...uaDB.iOS.v14,
					Safari: null
				}
			}),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.macOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
