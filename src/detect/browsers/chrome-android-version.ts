import { DetectMethod, DetectVersionMethod } from '../../core';
import { isChromeAndroid } from './chrome-android';
import { matchVersion } from '../../utils';

/** Detect Google Chrome Browser version on Android OS */
export const isChromeAndroidVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) => {
	if (isChromeAndroid(ua)) {
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
