import { isFirefox } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser', () => {
	testHelper(
		isFirefox,
		[
			...deepFlatFromObject(uaDB.Linux.Firefox),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox),
			...deepFlatFromObject(uaDB.Windows.v10.Firefox)
		],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject({
				...uaDB.Linux,
				Firefox: null
			}),
			...deepFlatFromObject({
				'Snow Leopard': {
					...uaDB.macOS['Snow Leopard'],
					Firefox: null
				},
				Lion: {
					...uaDB.macOS.Lion,
					Firefox: null
				},
				'Mountain Lion': {
					...uaDB.macOS['Mountain Lion'],
					Firefox: null
				},
				Mavericks: {
					...uaDB.macOS.Mavericks,
					Firefox: null
				},
				Yosemite: {
					...uaDB.macOS.Yosemite,
					Firefox: null
				},
				Sierra: {
					...uaDB.macOS.Sierra,
					Firefox: null
				},
				'High Sierra': {
					...uaDB.macOS['High Sierra'],
					Firefox: null
				},
				Mojave: {
					...uaDB.macOS.Mojave,
					Firefox: null
				},
				Catalina: {
					...uaDB.macOS.Catalina,
					Firefox: null
				},
				'Big Sur': {
					...uaDB.macOS['Big Sur'],
					Firefox: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Firefox: null
				}
			}),
			...deepFlatFromObject(uaDB.WindowsMobile),
			...deepFlatFromObject(uaDB.Xbox)
		]
	);
});
