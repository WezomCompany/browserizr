import { DetectMethod, DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import { isAndroid } from '../os/android';
import __chromeRegexp from './__chrome-regexp';

/** Detect Google Chrome Browser version on Android OS */
export const isChromeAndroidVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) =>
	isAndroid(ua) &&
	matchVersion({
		ua,
		version,
		operator,
		regExp: __chromeRegexp,
		groupIndex: 1
	});
