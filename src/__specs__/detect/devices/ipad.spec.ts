import { isIPad } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect iPad device', () => {
	testHelper(
		isIPad,
		[
			...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29.iPad),
			...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87.iPad),
			...deepFlatFromObject(uaDB.iOS.v14.Safari.v14.iPad),
			...deepFlatFromObject(uaDB.iOS.v14.Yandex.v20.iPad)
		],
		[
			...deepFlatFromObject({
				...uaDB.iOS.v11.Firefox.v29,
				...uaDB.iOS.v14.Chrome.v87,
				...uaDB.iOS.v14.EdgeIOS.v45,
				...uaDB.iOS.v14.Safari.v14,
				...uaDB.iOS.v14.Yandex.v20,
				iPad: null
			})
		]
	);
});
