import { isChromeVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Google Chrome Browser version', () => {
	describe(87, () => {
		testVersionGroupHelper(
			isChromeVersion,
			87,
			[
				...deepFlatFromObject(uaDB.Linux.Chrome.v87),
				...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
			],
			[],
			[
				...deepFlatFromObject(uaDB.Linux.Chrome.v87),
				...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
			],
			[],
			[
				...deepFlatFromObject(uaDB.Linux.Chrome.v87),
				...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
			],
			[]
		);
	});
});
