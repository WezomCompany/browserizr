import { isVivaldiVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Vivaldi Browser versions', () => {
	testVersionsListHelper(isVivaldiVersion, [
		{
			version: 3.4,
			values: [
				...deepFlatFromObject(uaDB.Linux.Vivaldi.v3_4),
				...deepFlatFromObject(uaDB.MacOS.v11.Vivaldi.v3_4),
				...deepFlatFromObject(uaDB.Windows.v10.Vivaldi.v3_4)
			]
		},
		{
			version: 3.5,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Vivaldi.v3_5)]
		}
	]);
});
