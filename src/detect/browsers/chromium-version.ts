import { isChromium } from './chromium';
import { DetectVersionMethod } from '../../core';
import { matchVersion } from '../../utils';

/** Detect browsers that based on Chromium version */
export const isChromiumVersion: DetectVersionMethod = (operator, version) => (ua) => {
	if (isChromium(ua)) {
		return matchVersion({
			ua,
			version,
			operator,
			regExp: /\sChrome\/([\d.]+)/,
			groupIndex: 1
		});
	} else {
		return false;
	}
};
