import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__windows-regexp';

/** Detect the Windows OS Version */
export default function isWindowsVersion(
	operator: DetectVersionOperator,
	version: 'XP' | 'Vista' | 7 | 8 | 8.1 | 10
) {
	return (ua: string): boolean => {
		let v;
		switch (version) {
			case 'XP':
				v = 5.1;
				break;
			case 7:
				v = 6.1;
				break;
			case 8:
				v = 6.2;
				break;
			case 8.1:
				v = 6.3;
				break;
			case 'Vista':
				v = 6;
				break;
			case 10:
				v = 10;
				break;
		}
		if (typeof v === 'number') {
			return matchVersion({
				ua,
				version: v,
				operator,
				regExp: __regexp,
				groupIndex: 2
			});
		} else {
			return false;
		}
	};
}
