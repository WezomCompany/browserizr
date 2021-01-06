import { isChromeIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Google Chrome iOS Browser versions', () => {
	testVersionsListHelper(isChromeIOSVersion, [
		{
			version: 87,
			values: [...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)]
		}
	]);
});
