import { DetectMethod, DetectVersionMethod } from '../../core';
import __operaRegexp from './__opera-regexp';
import { matchVersion } from '../../utils';

/** Detect Opera Browser version */
export const isOperaVersion: DetectVersionMethod = (operator, version): DetectMethod => (
	ua
) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __operaRegexp,
		groupIndex: 1
	});
