import { isSafariIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser versions on iOS', () => {
	testVersionsListHelper(isSafariIOSVersion, [
		{
			version: 14,
			values: [...deepFlatFromObject(uaDB.iOS.v14.Safari.v14)]
		}
	]);
});
