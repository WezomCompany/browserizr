import { isEdgeVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser versions', () => {
	testVersionsListHelper(isEdgeVersion, [
		{
			version: 15,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v15)]
		},
		{
			version: 16,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v16)]
		},
		{
			version: 17,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v17)]
		},
		{
			version: 18,
			values: [...deepFlatFromObject(uaDB.Windows.v10.Edge.v18)]
		},
		{
			version: 40,
			values: [...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)]
		},
		{
			version: 44,
			values: [...deepFlatFromObject(uaDB.Xbox.Edge.v44)]
		},
		{
			version: 80,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v80),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v80),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v80),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v80),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v80),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v80)
			]
		},
		{
			version: 81,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v81),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v81),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v81),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v81),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v81),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v81)
			]
		},
		{
			version: 83,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v83),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v83),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v83),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v83),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v83),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v83)
			]
		},
		{
			version: 84,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v84),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v84),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v84),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v84),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v84),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v84)
			]
		},
		{
			version: 85,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v85),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v85),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v85),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v85),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v85),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v85)
			]
		},
		{
			version: 86,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v86),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v86),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v86),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v86),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v86),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v86)
			]
		},
		{
			version: 87,
			values: [
				...deepFlatFromObject(uaDB.macOS.Sierra.Edge.v87),
				...deepFlatFromObject(uaDB.macOS['High Sierra'].Edge.v87),
				...deepFlatFromObject(uaDB.macOS.Mojave.Edge.v87),
				...deepFlatFromObject(uaDB.macOS.Catalina.Edge.v87),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			]
		}
	]);
});
