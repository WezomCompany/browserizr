import { DetectVersionOperator, DetectVersionReduction, matchVersion } from '../../utils';
import __regexp from './__windows-regexp';

/** Detect the Windows OS Version */
export default function isWindowsVersion(
	operator: DetectVersionOperator,
	version: 'XP' | 'Vista' | 7 | 8 | 8.1 | 10
) {
	return (ua: string): boolean => {
		let v;
		let r: DetectVersionReduction = 'auto';
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
				r = 'float';
				break;
			case 10:
				v = 10;
				r = 'int';
				break;
		}
		if (typeof v === 'number') {
			return matchVersion({
				ua,
				version: v,
				operator,
				regExp: __regexp,
				reductionToNumber: r,
				groupIndex: 2
			});
		} else {
			return false;
		}
	};
}
