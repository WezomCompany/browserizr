import { isFirefoxVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser versions', () => {
	testVersionsListHelper(isFirefoxVersion, [
		{
			version: 83,
			values: [
				...deepFlatFromObject(uaDB.Linux.Firefox.v83),
				...deepFlatFromObject(uaDB.MacOS.v11.Firefox.v83),
				...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
			]
		},
		{
			version: 84,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)]
		}
	]);
});
