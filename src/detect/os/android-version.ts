import { DetectVersionMethod, DetectMethod } from '../../core';
import { matchVersion } from '../../utils';
import __regexp from './__android-regexp';

/** Detect the Android OS Version */
export const isAndroidVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) => {
	return matchVersion({
		ua,
		version,
		operator,
		regExp: __regexp,
		groupIndex: 1
	});
};
