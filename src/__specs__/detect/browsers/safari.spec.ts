import { isSafari } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser', () => {
	testHelper(
		isSafari,
		[...uaDB.MacOS.v11.Safari.v14.Standard],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject({
				...uaDB.MacOS,
				v11: {
					...uaDB.MacOS.v11,
					Safari: null
				}
			}),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
