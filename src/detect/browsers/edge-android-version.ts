import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';
import __edgeAndroidRegexp from './__edge-android-regexp';

/** Detect Microsoft Edge Browser version on Android */
export const isEdgeAndroidVersion: DetectVersionMethod = (operator, version) => (ua) =>
	matchVersion({
		ua,
		version,
		operator,
		regExp: __edgeAndroidRegexp,
		groupIndex: 1
	});
