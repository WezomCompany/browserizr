import { isIOS } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect iOS', () => {
	testHelper(
		isIOS,
		[...deepFlatFromObject(uaDB.iOS)],
		[...deepFlatFromObject(uaDB.macOS)]
	);
});
