import { isChromeIOS } from './chrome-ios';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Google Chrome browser version on iOS */
export const isChromeIOSVersion: DetectVersionMethod = (operator, version) => (ua) => {
	if (isChromeIOS(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sCriOS\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
