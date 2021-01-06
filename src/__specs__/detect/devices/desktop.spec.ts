import { isDesktop } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect desktop device', () => {
	testHelper(
		isDesktop,
		[
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.MacOS),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.Xbox)
		],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.WindowsMobile)
		]
	);
});
