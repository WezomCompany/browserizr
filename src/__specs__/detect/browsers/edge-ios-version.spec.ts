import { isEdgeIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge iOS Browser versions', () => {
	testVersionsListHelper(isEdgeIOSVersion, [
		{
			version: 45,
			values: [...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)]
		}
	]);
});
