import { isEdgeAndroid } from './edge-android';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Microsoft Edge Browser version on Android */
export const isEdgeAndroidVersion: DetectVersionMethod = (operator, version) => (ua) => {
	if (isEdgeAndroid(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sEdgA\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
