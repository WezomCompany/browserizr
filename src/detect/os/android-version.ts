import { DetectVersionMethod, DetectMethod } from '../../core';
import { isAndroid } from './android';
import { matchVersion } from '../../utils';

/** Detect the Android OS Version */
export const isAndroidVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) => {
	if (isAndroid(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /[\s(]Android\s([\d]+)[;)]/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
