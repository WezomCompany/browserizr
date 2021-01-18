import { isSafari } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser', () => {
	testHelper(
		isSafari,
		[
			...deepFlatFromObject(uaDB.macOS.Sierra.Safari),
			...deepFlatFromObject(uaDB.macOS['High Sierra'].Safari),
			...deepFlatFromObject(uaDB.macOS.Mojave.Safari),
			...deepFlatFromObject(uaDB.macOS.Catalina.Safari),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Safari)
		],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject(uaDB.Linux),
			...deepFlatFromObject({
				Sierra: {
					...uaDB.macOS.Sierra,
					Safari: null
				},
				'High Sierra': {
					...uaDB.macOS['High Sierra'],
					Safari: null
				},
				Mojave: {
					...uaDB.macOS.Mojave,
					Safari: null
				},
				Catalina: {
					...uaDB.macOS.Catalina,
					Safari: null
				},
				'Big Sur': {
					...uaDB.macOS['Big Sur'],
					Safari: null
				}
			}),
			...deepFlatFromObject(uaDB.Windows),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
