import { isChrome } from './chrome';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Google Chrome Browser version */
export const isChromeVersion: DetectVersionMethod = (operator, version) => (ua) => {
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
