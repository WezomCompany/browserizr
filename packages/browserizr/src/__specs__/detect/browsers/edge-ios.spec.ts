import { isEdgeIOS } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge iOS Browser', () => {
	testHelper(
		isEdgeIOS,
		[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS)],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject({
				...uaDB.iOS,
				v14: {
					...uaDB.iOS.v14,
					EdgeIOS: null
				}
			}),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.macOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject(uaDB.Xbox),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile)
		]
	);
});
