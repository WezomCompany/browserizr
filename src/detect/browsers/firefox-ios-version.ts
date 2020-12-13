import { DetectMethod, DetectVersionMethod } from '../../core';
import { isFirefoxIOS } from './firefox-ios';
import { matchVersion } from '../../utils';

/** Detect Mozilla Firefox Browser version on iOS */
export const isFirefoxIOSVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) => {
	if (isFirefoxIOS(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sFxiOS\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
