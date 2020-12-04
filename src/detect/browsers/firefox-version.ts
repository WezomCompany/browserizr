import { isFirefox } from './firefox';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect Mozilla Firefox browser version */
export const isFirefoxVersion: DetectVersionMethod = (operator, version) => (ua) => {
	if (isFirefox(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sFirefox\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
