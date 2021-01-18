import { isMobile } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect mobile device', () => {
	testHelper(
		isMobile,
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.WindowsMobile)
		],
		[
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.macOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
