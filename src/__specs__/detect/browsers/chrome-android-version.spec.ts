import { isChromeAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Google Chrome Android Browser 85 version', () => {
	describe(85, () => {
		testVersionGroupHelper(
			isChromeAndroidVersion,
			85,
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)],
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)],
			[
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v85),
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)
			],
			[],
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)],
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)]
		);
	});

	describe(87, () => {
		testVersionGroupHelper(
			isChromeAndroidVersion,
			87,
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)],
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)],
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)],
			[...deepFlatFromObject(uaDB.Android.v10.Chrome.v85)],
			[
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v85),
				...deepFlatFromObject(uaDB.Android.v10.Chrome.v87)
			],
			[]
		);
	});
});
