import { isEdgeVersion } from '../../../index';
import { deepFlatFromObject, testVersionGroupHelper, uaDB } from '../../db';

describe('Detect Microsoft Edge Browser version', () => {
	describe(40, () => {
		testVersionGroupHelper(
			isEdgeVersion,
			40,
			[...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)],
			[
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[],
			[...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)],
			[
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			]
		);
	});

	describe(44, () => {
		testVersionGroupHelper(
			isEdgeVersion,
			44,
			[...deepFlatFromObject(uaDB.Xbox.Edge.v44)],
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40)],
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44)
			],
			[
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			]
		);
	});

	describe(87, () => {
		testVersionGroupHelper(
			isEdgeVersion,
			87,
			[
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44)
			],
			[
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44)
			],
			[
				...deepFlatFromObject(uaDB.WindowsMobile.Edge.v40),
				...deepFlatFromObject(uaDB.Xbox.Edge.v44),
				...deepFlatFromObject(uaDB.MacOS.v11.Edge.v87),
				...deepFlatFromObject(uaDB.Windows.v10.Edge.v87)
			],
			[]
		);
	});
});
