import { isEdgeIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge iOS Browser version', () => {
	describe(45, () => {
		testVersionGroupHelper(
			isEdgeIOSVersion,
			45,
			[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)],
			[],
			[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)],
			[],
			[...deepFlatFromObject(uaDB.iOS.v14.EdgeIOS.v45)],
			[]
		);
	});
});
