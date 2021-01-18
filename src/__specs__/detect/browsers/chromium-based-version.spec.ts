import { isChromiumBasedVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Chromium-based Browser versions', () => {
	testVersionsListHelper(isChromiumBasedVersion, [
		{
			version: 85,
			values: [...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)]
		},
		{
			version: 87,
			values: [
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v87),
				...deepFlatFromObject(uaDB.Linux.Chrome.v87),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Chrome.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Chrome.v87)
			]
		}
	]);
});
