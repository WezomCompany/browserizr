import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import __edgeIOSRegexp from './__edge-ios-regexp';

/** Detect Microsoft Edge Browser version on iOS */
export const isEdgeIOSVersion: DetectVersionMethod = (operator, version) => (ua) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __edgeIOSRegexp,
		groupIndex: 1
	});
