import { isFirefoxVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser 83 version', () => {
	testVersionGroupHelper(
		isFirefoxVersion,
		83,
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		],
		[...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)],
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)
		],
		[],
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		],
		[...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)]
	);
});

describe('Detect Mozilla Firefox Browser 84 version', () => {
	testVersionGroupHelper(
		isFirefoxVersion,
		84,
		[...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)],
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		],
		[...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)],
		[
			...deepFlatFromObject(uaDB.Linux.Firefox.v83),
			...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
		],
		[...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)]
	);
});
