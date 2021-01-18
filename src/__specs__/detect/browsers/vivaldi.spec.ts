import { isVivaldi } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Vivaldi Browser', () => {
	testHelper(
		isVivaldi,
		[
			...deepFlatFromObject(uaDB.Linux.Vivaldi),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Vivaldi),
			...deepFlatFromObject(uaDB.Windows.v10.Vivaldi)
		],
		[
			...deepFlatFromObject(uaDB.Linux.Chrome),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Chrome),
			...deepFlatFromObject(uaDB.Windows.v10.Chrome)
		]
	);
});
