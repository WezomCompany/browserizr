import { isYandexVersion } from '../../../index';
import { deepFlatFromObject, testVersionsListHelper, uaDB } from '../../db';

describe('Detect Yandex Browser version', () => {
	testVersionsListHelper(isYandexVersion, [
		{
			version: 20,
			values: [
				...deepFlatFromObject(uaDB.iOS.v14.Yandex.v20),
				...deepFlatFromObject(uaDB.macOS['Big Sur'].Yandex.v20),
				...deepFlatFromObject(uaDB.Windows.v10.Yandex.v20)
			]
		}
	]);
});
