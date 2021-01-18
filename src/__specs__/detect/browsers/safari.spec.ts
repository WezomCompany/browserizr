import { isSafari } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Apple Safari Browser', () => {
	testHelper(
		isSafari,
		[
			...deepFlatFromObject(uaDB.macOS['Snow Leopard'].Safari),
			...deepFlatFromObject(uaDB.macOS.Lion.Safari),
			...deepFlatFromObject(uaDB.macOS['Mountain Lion'].Safari),
			...deepFlatFromObject(uaDB.macOS.Mavericks.Safari),
			...deepFlatFromObject(uaDB.macOS.Yosemite.Safari),
			...deepFlatFromObject(uaDB.macOS['El Capitan'].Safari),
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
				'Snow Leopard': {
					...uaDB.macOS['Snow Leopard'],
					Safari: null
				},
				Lion: {
					...uaDB.macOS.Lion,
					Safari: null
				},
				'Mountain Lion': {
					...uaDB.macOS['Mountain Lion'],
					Safari: null
				},
				Mavericks: {
					...uaDB.macOS.Mavericks,
					Safari: null
				},
				Yosemite: {
					...uaDB.macOS.Yosemite,
					Safari: null
				},
				'El Capitan': {
					...uaDB.macOS['El Capitan'],
					Safari: null
				},
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
