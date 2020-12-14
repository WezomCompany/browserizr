import { DetectMethod, DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import __firefoxIOSRegexp from './__firefox-ios-regexp';

/** Detect Mozilla Firefox Browser version on iOS */
export const isFirefoxIOSVersion: DetectVersionMethod = (
	operator,
	version
): DetectMethod => (ua) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __firefoxIOSRegexp,
		groupIndex: 1
	});
