import { isFirefoxAndroidVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Android Browser version', () => {
	describe(82, () => {
		testVersionGroupHelper(
			isFirefoxAndroidVersion,
			82,
			[...deepFlatFromObject(uaDB.Android.v10.Firefox.v82)],
			[
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
			],
			[
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
			],
			[],
			[...deepFlatFromObject(uaDB.Android.v10.Firefox.v82)],
			[
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
			]
		);
	});

	describe(83, () => {
		testVersionGroupHelper(
			isFirefoxAndroidVersion,
			83,
			[...deepFlatFromObject(uaDB.Android.v11.Firefox.v83)],
			[
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
			],
			[
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
			],
			[...deepFlatFromObject(uaDB.Android.v10.Firefox.v82)],
			[
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83)
			],
			[...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)]
		);
	});

	describe(84, () => {
		testVersionGroupHelper(
			isFirefoxAndroidVersion,
			84,
			[...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)],
			[
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83)
			],
			[...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)],
			[
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83)
			],
			[
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v82),
				...deepFlatFromObject(uaDB.Android.v11.Firefox.v83),
				...deepFlatFromObject(uaDB.Android.v10.Firefox.v84)
			],
			[]
		);
	});
});
