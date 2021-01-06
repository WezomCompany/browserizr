import { isSafariVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser versions', () => {
	testVersionsListHelper(isSafariVersion, [
		{
			version: 14,
			values: [...deepFlatFromObject(uaDB.MacOS.v11.Safari.v14)]
		}
	]);
});
