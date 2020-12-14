import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import { isAndroid } from '../os/android';
import __firefoxRegexp from './__firefox-regexp';

/** Detect Mozilla Firefox Browser version on Android OS */
export const isFirefoxAndroidVersion: DetectVersionMethod = (operator, version) => (ua) =>
	isAndroid(ua) &&
	matchVersion({
		ua,
		version,
		operator,
		regExp: __firefoxRegexp,
		groupIndex: 1
	});
