import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import __edgeRegexp from './__edge-regexp';

/** Detect Microsoft Edge Browser version */
export const isEdgeVersion: DetectVersionMethod = (operator, version) => (ua) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __edgeRegexp,
		groupIndex: 2
	});
