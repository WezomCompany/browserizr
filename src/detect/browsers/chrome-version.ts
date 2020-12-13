import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import { isAndroid } from '../os/android';
import __chromeRegexp from './__chrome-regexp';

/** Detect Google Chrome Browser version */
export const isChromeVersion: DetectVersionMethod = (operator, version) => (ua) =>
	!isAndroid(ua) &&
	matchVersion({
		ua,
		version,
		operator,
		regExp: __chromeRegexp,
		groupIndex: 1
	});
