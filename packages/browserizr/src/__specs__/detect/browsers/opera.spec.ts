import { isOpera } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Opera Browser', () => {
	testHelper(
		isOpera,
		[
			...deepFlatFromObject(uaDB.Android.v10.Opera),
			...deepFlatFromObject(uaDB.Linux.Opera),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Opera),
			...deepFlatFromObject(uaDB.Windows.v10.Opera)
		],
		[
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		]
	);
});
