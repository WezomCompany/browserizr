import { DetectVersionMethod, DetectMethod } from '../../core';
import { isAndroidOS } from './android';
import { matchVersion } from '../../utils';

/** Detect the Android OS Version */
export const isAndroidOSVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) => {
	if (isAndroidOS(ua)) {
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
