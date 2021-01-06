import { isOperaVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Opera Browser versions', () => {
	testVersionsListHelper(isOperaVersion, [
		{
			version: 59,
			values: [...deepFlatFromObject(uaDB.Android.v10.Opera.v59)]
		},
		{
			version: 60,
			values: [...deepFlatFromObject(uaDB.Android.v10.Opera.v60)]
		},
		{
			version: 61,
			values: [...deepFlatFromObject(uaDB.Android.v10.Opera.v61)]
		},
		{
			version: 72,
			values: [
				...deepFlatFromObject(uaDB.Linux.Opera.v72),
				...deepFlatFromObject(uaDB.MacOS.v11.Opera.v72),
				...deepFlatFromObject(uaDB.Windows.v10.Opera.v72)
			]
		}
	]);
});
