import { isChromeIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Google Chrome iOS Browser version', () => {
	describe(87, () => {
		testVersionGroupHelper(
			isChromeIOSVersion,
			87,
			[...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)],
			[],
			[...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)],
			[],
			[...deepFlatFromObject(uaDB.iOS.v14.Chrome.v87)],
			[]
		);
	});
});
