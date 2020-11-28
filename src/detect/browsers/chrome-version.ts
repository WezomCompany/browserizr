import { isChrome } from './chrome';
import { DetectVersionMethod } from '../../core';
import { matchVersion, MORE_THEN_OR_EQUAL } from '../../utils';

/** Detect Google Chrome browser version */
export const isChromeVersion: DetectVersionMethod = (
	version,
	operator = MORE_THEN_OR_EQUAL
) => (ua) => {
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
