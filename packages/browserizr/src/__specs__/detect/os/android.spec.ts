import { isAndroid } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Android OS', () => {
	testHelper(
		isAndroid,
		[...deepFlatFromObject(uaDB.Android), ...deepFlatFromObject(uaDB.WindowsMobile)],
		[]
	);
});
