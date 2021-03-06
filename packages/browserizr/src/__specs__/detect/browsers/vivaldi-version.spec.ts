import { isVivaldiVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Vivaldi Browser versions', () => {
	testVersionsListHelper(isVivaldiVersion, [
		{
			version: 3.4,
			values: [
				...deepFlatFromObject(uaDB.Linux.Vivaldi.v3_4),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Vivaldi.v3_4),
				...deepFlatFromObject(uaDB.Windows.v10.Vivaldi.v3_4)
			]
		},
		{
			version: 3.5,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Vivaldi.v3_5)]
		},
		{
			version: 3.6,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Vivaldi.v3_6)]
		}
	]);
});
