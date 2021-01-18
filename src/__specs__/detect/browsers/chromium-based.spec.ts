import { isChromiumBased } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Chromium-based Browser', () => {
	testHelper(
		isChromiumBased,
		[
			...deepFlatFromObject(uaDB.Android.v10.Chrome),
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome),
			// Edge
			...deepFlatFromObject(uaDB.Android.v10.EdgeAndroid),
			...deepFlatFromObject(uaDB.Windows.v10.Edge),
			// Opera
			...deepFlatFromObject(uaDB.Android.v10.Opera),
			...deepFlatFromObject(uaDB.Linux.Opera),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Opera),
			...deepFlatFromObject(uaDB.Windows.v10.Opera),
			// Vivaldi
			...deepFlatFromObject(uaDB.Linux.Vivaldi),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Vivaldi),
			...deepFlatFromObject(uaDB.Windows.v10.Vivaldi),
			// Yandex
			...deepFlatFromObject(uaDB.Android.v11.Yandex),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Yandex),
			...deepFlatFromObject(uaDB.Windows.v10.Yandex)
		],
		[...deepFlatFromObject(uaDB.iOS.v14.Yandex)]
	);
});
