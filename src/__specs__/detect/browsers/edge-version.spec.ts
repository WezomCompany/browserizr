import { isEdgeVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser versions', () => {
	testVersionsListHelper(isEdgeVersion, [
		{
			version: 40,
			values: [...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)]
		},
		{
			version: 44,
			values: [...deepFlatFromObject(uaDB.Xbox.Edge.v44)]
		},
		{
			version: 87,
			values: [
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			]
		}
	]);
});
