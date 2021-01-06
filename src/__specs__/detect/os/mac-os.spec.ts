import { isMacOS } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect macOS', () => {
	testHelper(
		isMacOS,
		[...deepFlatFromObject(uaDB.MacOS)],
		[...deepFlatFromObject(uaDB.iOS)]
	);
});
