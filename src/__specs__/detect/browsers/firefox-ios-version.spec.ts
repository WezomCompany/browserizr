import { isFirefoxIOSVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox iOS Browser 29 version', () => {
	testVersionGroupHelper(
		isFirefoxIOSVersion,
		29,
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)],
		[],
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)],
		[],
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox.v29)],
		[]
	);
});
