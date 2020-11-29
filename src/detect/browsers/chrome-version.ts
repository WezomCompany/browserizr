import { isChrome } from './chrome';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Google Chrome browser version */
export const isChromeVersion: DetectVersionMethod = (version, operator) => (ua) => {
	if (isChrome(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sChrome\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
