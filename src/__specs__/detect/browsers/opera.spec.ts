import { isOpera } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Opera Browser', () => {
	testHelper(
		isOpera,
		[
			...deepFlatFromObject(uaDB.Android.v10.Opera),
			...deepFlatFromObject(uaDB.Linux.Opera),
			...deepFlatFromObject(uaDB.MacOS.v11.Opera),
			...deepFlatFromObject(uaDB.Windows.v10.Opera)
		],
		[
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		]
	);
});
