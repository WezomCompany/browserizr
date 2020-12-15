import { DetectMethod, DetectVersionMethod } from '../../core';
import __safariRegexp from './__safari-regexp';
import { matchVersion } from '../../utils';
import { isIOS } from '../os/ios';

/** Detect Apple Safari Browser version */
export const isSafariVersion: DetectVersionMethod = (operator, version): DetectMethod => (
	ua
) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __safariRegexp,
		groupIndex: 1
	}) && !isIOS(ua);
