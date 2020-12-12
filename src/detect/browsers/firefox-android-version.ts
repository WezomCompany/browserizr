import { isFirefoxAndroid } from './firefox-android';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Mozilla Firefox Browser version on Android OS */
export const isFirefoxAndroidVersion: DetectVersionMethod = (operator, version) => (
	ua
) => {
	if (isFirefoxAndroid(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sFirefox\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
