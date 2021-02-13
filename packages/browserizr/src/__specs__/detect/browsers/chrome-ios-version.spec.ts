import { isChromeIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Google Chrome iOS Browser versions', () => {
	testVersionsListHelper(isChromeIOSVersion, [
		{
			version: 86,
			values: [
				...deepFlatFromObject(uaDB.iOS.v12.Chrome.v86),
				...deepFlatFromObject(uaDB.iOS.v13.Chrome.v86),
				...deepFlatFromObject(uaDB.iOS.v14.Chrome.v86)
			]
		},
		{
			version: 87,
			values: [...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)]
		}
	]);
});
