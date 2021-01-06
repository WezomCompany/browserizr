import { isChrome } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Google Chrome Browser', () => {
	testHelper(
		isChrome,
		[
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		],
		[
			...deepFlatFromObject({
				...uaDB.Linux,
				Chrome: null
			}),
			...deepFlatFromObject({
				...uaDB.MacOS,
				v11: {
					...uaDB.MacOS.v11,
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
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.WindowsMobile)
		]
	);
});
