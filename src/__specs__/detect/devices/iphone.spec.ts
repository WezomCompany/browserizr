import { isIPhone } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect iPhone device', () => {
	testHelper(
		isIPhone,
		[
			...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29.iPhone),
			...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87.iPhone),
			...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45.iPhone),
			...deepFlatFromObject(uaDB.iOS.v14.Safari.v14.iPhone),
			...deepFlatFromObject(uaDB.iOS.v14.Yandex.v20.iPhone)
		],
		[
			...deepFlatFromObject({
				...uaDB.iOS.v11.Firefox.v29,
				...uaDB.iOS.v14.Chrome.v87,
				...uaDB.iOS.v14.EdgeIOS.v45,
				...uaDB.iOS.v14.Safari.v14,
				...uaDB.iOS.v14.Yandex.v20,
				iPhone: null
			})
		]
	);
});
