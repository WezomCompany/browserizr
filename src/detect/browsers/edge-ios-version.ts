import { isEdgeIOS } from './edge-ios';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Microsoft Edge browser version on iOS */
export const isEdgeIOSVersion: DetectVersionMethod = (operator, version) => (ua) => {
	if (isEdgeIOS(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sEdgiOS\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
