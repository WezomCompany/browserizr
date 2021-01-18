import { isEdge } from '../../../index';
import { deepFlatFromObject, testHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser', () => {
	testHelper(
		isEdge,
		[
			...deepFlatFromObject(uaDB.macOS.Sierra.Edge),
			...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge),
			...deepFlatFromObject(uaDB.macOS.Mojave.Edge),
			...deepFlatFromObject(uaDB.macOS.Catalina.Edge),
			...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge),
			...deepFlatFromObject(uaDB.Windows.v10.Edge),
			...deepFlatFromObject(uaDB.WindowsMobile.Edge),
			...deepFlatFromObject(uaDB.Xbox.Edge)
		],
		[
			...deepFlatFromObject(uaDB.Android),
			...deepFlatFromObject(uaDB.iOS),
			...deepFlatFromObject({
				'Snow Leopard': {
					...uaDB.macOS['Snow Leopard'],
					Edge: null
				},
				Lion: {
					...uaDB.macOS.Lion,
					Edge: null
				},
				'Mountain Lion': {
					...uaDB.macOS['Mountain Lion'],
					Edge: null
				},
				Mavericks: {
					...uaDB.macOS.Mavericks,
					Edge: null
				},
				Yosemite: {
					...uaDB.macOS.Yosemite,
					Edge: null
				},
				Sierra: {
					...uaDB.macOS.Sierra,
					Edge: null
				},
				'High Sierra': {
					...uaDB.macOS['High Sierra'],
					Edge: null
				},
				Mojave: {
					...uaDB.macOS.Mojave,
					Edge: null
				},
				Catalina: {
					...uaDB.macOS.Catalina,
					Edge: null
				},
				'Big Sur': {
					...uaDB.macOS['Big Sur'],
					Edge: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.Windows,
				v10: {
					...uaDB.Windows.v10,
					Edge: null
				}
			}),
			...deepFlatFromObject({
				...uaDB.WindowsMobile,
				Edge: null
			}),
			...deepFlatFromObject({
				...uaDB.Xbox,
				Edge: null
			})
		]
	);
});
