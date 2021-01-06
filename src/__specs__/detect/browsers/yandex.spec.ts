import { isYandex } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Yandex Browser', () => {
	testHelper(
		isYandex,
		[
			...deepFlatFromObject(uaDB.Android.v11.Yandex),
			...deepFlatFromObject(uaDB.iOS.v14.Yandex),
			...deepFlatFromObject(uaDB.MacOS.v11.Yandex),
			...deepFlatFromObject(uaDB.Windows.v10.Yandex)
		],
		[
			...deepFlatFromObject(uaDB.Android.v10.Chrome),
			...deepFlatFromObject(uaDB.iOS.v14.Chrome),
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		]
	);
});
