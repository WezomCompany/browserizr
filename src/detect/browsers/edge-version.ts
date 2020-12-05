import { isEdge } from './edge';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Microsoft Edge browser version */
export const isEdgeVersion: DetectVersionMethod = (operator, version) => (ua) => {
	if (isEdge(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sEdg(e)?\/([\d.]+)/,
			groupIndex: 2
		});
	} else {
		return false;
	}
};
