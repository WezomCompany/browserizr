import { isFirefoxVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Mozilla Firefox Browser versions', () => {
	testVersionsListHelper(isFirefoxVersion, [
		{
			version: 76,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v76),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v76)
			]
		},
		{
			version: 77,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v77),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v77)
			]
		},
		{
			version: 78,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v78),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v78)
			]
		},
		{
			version: 79,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v79),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v79)
			]
		},
		{
			version: 80,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v80),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v80)
			]
		},
		{
			version: 81,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v81),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v81)
			]
		},
		{
			version: 82,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v82),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v82)
			]
		},
		{
			version: 83,
			values: [
				...deepFlatFromObject(uaDB.Linux.Firefox.v83),
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v83),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v83),
				...deepFlatFromObject(uaDB.Windows.v10.Firefox.v83)
			]
		},
		{
			version: 84,
			values: [
				...deepFlatFromObject(uaDB.macOS.Catalina.Firefox.v84),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Firefox.v84),
				...deepFlatFromObject(uaDB.Windows.v10.Firefox.v84)
			]
		}
	]);
});
