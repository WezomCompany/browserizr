import { isEdgeVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser versions', () => {
	testVersionsListHelper(isEdgeVersion, [
		{
			version: 15,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v15)]
		},
		{
			version: 16,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v16)]
		},
		{
			version: 17,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v17)]
		},
		{
			version: 18,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v18)]
		},
		{
			version: 40,
			values: [...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)]
		},
		{
			version: 44,
			values: [...deepFlatFromObject(uaDB.Xbox.Edge.v44)]
		},
		{
			version: 80,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v80)]
		},
		{
			version: 81,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v81)]
		},
		{
			version: 83,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v83)]
		},
		{
			version: 84,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v84)]
		},
		{
			version: 85,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v85)]
		},
		{
			version: 86,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v86)]
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
