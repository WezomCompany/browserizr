import { isFirefoxIOS } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox iOS Browser', () => {
	testHelper(
		isFirefoxIOS,
		[...deepFlatFromObject(uaDB.iOS.v11.Firefox)],
		[
			...deepFlatFromObject({
				...uaDB,
				iOS: {
					...uaDB.iOS,
					v11: {
						...uaDB.iOS.v11,
						Firefox: null
					}
				}
			})
		]
	);
});
