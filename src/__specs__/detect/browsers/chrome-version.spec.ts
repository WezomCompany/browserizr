import { isChromeVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Google Chrome Browser versions', () => {
	testVersionsListHelper(isChromeVersion, [
		{
			version: 87,
			values: [
				...deepFlatFromObject(uaDB.Linux.Chrome.v87),
				...deepFlatFromObject(uaDB.MacOS.v11.Chrome.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
			]
		}
	]);
});
