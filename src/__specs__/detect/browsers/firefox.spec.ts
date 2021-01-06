import { isFirefox } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser', () => {
	testHelper(
		isFirefox,
		[
			...deepFlatFromObject(uaDB.Linux.Firefox),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox)
		],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject({
				...uaDB.Linux,
				Firefox: null
			}),
			...deepFlatFromObject({
				...uaDB.MacOS.v11,
				Firefox: null
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Firefox: null
				}
			}),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
