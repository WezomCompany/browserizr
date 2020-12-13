import { DetectMethod, DetectVersionOperator } from '../../core';
import { isWindows } from './windows';
import { matchVersion } from '../../utils';

/** Detect the Windows OS Version */
export const isWindowsVersion = (
	operator: DetectVersionOperator,
	version: 'XP' | 'Vista' | 7 | 8 | 8.1 | 10
): DetectMethod => (ua) => {
	if (isWindows(ua)) {
		let v;
		switch (version) {
			case 'XP':
				v = 5.1;
				break;
			case 'Vista':
				v = 6;
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
			case 10:
				v = 10;
				break;
		}
		if (typeof v === 'number') {
			return matchVersion({
				ua,
				version: v,
				operator,
				regExp: /[\s(]Windows\sNT\s([\d.]+)[;)]/,
				groupIndex: 1
			});
		} else {
			return false;
		}
	} else {
		return false;
	}
};
