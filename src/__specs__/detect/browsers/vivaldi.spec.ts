import { isVivaldi } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Vivaldi Browser', () => {
	testHelper(
		isVivaldi,
		[
			...deepFlatFromObject(uaDB.Linux.Vivaldi),
			...deepFlatFromObject(uaDB.MacOS.v11.Vivaldi),
			...deepFlatFromObject(uaDB.Windows.v10.Vivaldi)
		],
		[
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.MacOS.v11.Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		]
	);
});
