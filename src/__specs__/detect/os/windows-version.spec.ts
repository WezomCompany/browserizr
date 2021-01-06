import { isWindowsVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Windows OS versions', () => {
	testVersionsListHelper<'XP' | 'Vista' | 7 | 8 | 8.1 | 10>(isWindowsVersion, [
		{
			version: 'XP',
			values: [...deepFlatFromObject(uaDB.Windows.XP)]
		},
		{
			version: 'Vista',
			values: [...deepFlatFromObject(uaDB.Windows.Vista)]
		},
		{
			version: 7,
			values: [...deepFlatFromObject(uaDB.Windows.v7)]
		},
		{
			version: 8,
			values: [...deepFlatFromObject(uaDB.Windows.v8)]
		},
		{
			version: 8.1,
			values: [...deepFlatFromObject(uaDB.Windows.v8_1)]
		},
		{
			version: 10,
			values: [...deepFlatFromObject(uaDB.Windows.v10)]
		}
	]);
});
