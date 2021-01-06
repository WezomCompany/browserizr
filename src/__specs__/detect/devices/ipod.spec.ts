import { isIPod } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect isIPod device', () => {
	testHelper(
		isIPod,
		[
			...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29.iPod),
			...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87.iPod),
			...deepFlatFromObject(uaDB.iOS.v14.Safari.v14.iPod),
			...deepFlatFromObject(uaDB.iOS.v14.Yandex.v20.iPod)
		],
		[
			...deepFlatFromObject({
				...uaDB.iOS.v11.Firefox.v29,
				...uaDB.iOS.v14.Chrome.v87,
				...uaDB.iOS.v14.EdgeIOS.v45,
				...uaDB.iOS.v14.Safari.v14,
				...uaDB.iOS.v14.Yandex.v20,
				iPod: null
			})
		]
	);
});
