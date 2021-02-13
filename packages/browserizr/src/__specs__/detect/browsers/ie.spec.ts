import { isIE } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Internet Explorer Browser', () => {
	testHelper(
		isIE,
		[
			...deepFlatFromObject(uaDB.Windows.XP.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.Vista.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v7.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v8.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v8_1.InternetExplorer),
			...deepFlatFromObject(uaDB.Windows.v10.InternetExplorer)
		],
		[
			...deepFlatFromObject(uaDB.Windows.v10.Edge),
			...deepFlatFromObject(uaDB.WindowsMobile.Edge),
			...deepFlatFromObject(uaDB.Xbox.Edge)
		]
	);
});
