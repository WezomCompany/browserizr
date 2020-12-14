import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import __firefoxRegexp from './__firefox-regexp';
import { isAndroid } from '../os/android';

/** Detect Mozilla Firefox Browser version */
export const isFirefoxVersion: DetectVersionMethod = (operator, version) => (ua) =>
	!isAndroid(ua) &&
	matchVersion({
		ua,
		version,
		operator,
		regExp: __firefoxRegexp,
		groupIndex: 1
	});
