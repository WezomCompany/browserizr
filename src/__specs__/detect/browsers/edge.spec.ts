import { isEdge } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser', () => {
	testHelper(
		isEdge,
		[
			...deepFlatFromObject(uaDB.MacOS.v11.Edge),
			...deepFlatFromObject(uaDB.Windows.v10.Edge),
			...deepFlatFromObject(uaDB.WindowsMobile.Edge),
			...deepFlatFromObject(uaDB.Xbox.Edge)
		],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject({
				...uaDB.MacOS,
				v11: {
					...uaDB.MacOS.v11,
					Edge: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Edge: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.WindowsMobile,
				Edge: null
			}),
			...deepFlatFromObject({
				...uaDB.Xbox,
				Edge: null
			})
		]
	);
});
