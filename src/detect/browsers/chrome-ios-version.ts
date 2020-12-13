import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import __chromeIOSRegexp from './__chrome-ios-regexp';

/** Detect Google Chrome Browser version on iOS */
export const isChromeIOSVersion: DetectVersionMethod = (operator, version) => (ua) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __chromeIOSRegexp,
		groupIndex: 1
	});
