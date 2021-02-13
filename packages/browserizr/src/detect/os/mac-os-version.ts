import {
	DetectVersionOperator,
	matchVersion,
	transformMacOSorIPadOSVersionMatch
} from '../../utils';
import __regexp from './__mac-os-regexp';

/** Detect the macOS Version */
export default function isMacOSVersion(
	operator: DetectVersionOperator,
	version:
		| 'Cheetah'
		| 'Puma'
		| 'Jaguar'
		| 'Panther'
		| 'Tiger'
		| 'Leopard'
		| 'Snow Leopard'
		| 'Lion'
		| 'Mountain Lion'
		| 'Mavericks'
		| 'Yosemite'
		| 'El Capitan'
		| 'Sierra'
		| 'High Sierra'
		| 'Mojave'
		| 'Catalina'
		| 'Big Sur'
) {
	return (ua: string): boolean => {
		let v: number | null = null;
		switch (version) {
			// case 'Cheetah':
			// 	v = 1000;
			// 	break;
			// case 'Puma':
			// 	v = 1001;
			// 	break;
			// case 'Jaguar':
			// 	v = 1002;
			// 	break;
			// case 'Panther':
			// 	v = 1003;
			// 	break;
			// case 'Tiger':
			// 	v = 1004;
			// 	break;
			// case 'Leopard':
			// 	v = 1005;
			// 	break;
			case 'Snow Leopard':
				v = 1006;
				break;
			case 'Lion':
				v = 1007;
				break;
			case 'Mountain Lion':
				v = 1008;
				break;
			case 'Mavericks':
				v = 1009;
				break;
			case 'Yosemite':
				v = 1010;
				break;
			case 'El Capitan':
				v = 1011;
				break;
			case 'Sierra':
				v = 1012;
				break;
			case 'High Sierra':
				v = 1013;
				break;
			case 'Mojave':
				v = 1014;
				break;
			case 'Catalina':
				v = 1015;
				break;
			case 'Big Sur':
				v = 1100;
				break;
		}
		if (typeof v === 'number') {
			return matchVersion({
				ua,
				version: v,
				operator,
				regExp: __regexp,
				groupIndex: 2,
				reductionToNumber: 'int',
				transformMatch: (version: string) => {
					const string = transformMacOSorIPadOSVersionMatch(version);
					return string >= '1016' ? '1100' : string;
				}
			});
		}
		return false;
	};
}
