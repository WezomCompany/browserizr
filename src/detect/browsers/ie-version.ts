import { DetectVersionMethod } from '../../core';
import { isIE } from './ie';
import { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL } from '../../utils';

/** Detect Internet Explorer browser and wanted version */
export const isIEVersion: DetectVersionMethod = (version, operator) => (ua) => {
	if (isIE(ua)) {
		const versions = [];
		versions[8] = () =>
			/MSIE 8\.\d/i.test(ua) || /MSIE 7\.0; Windows NT 6\.0/i.test(ua);
		versions[9] = () => /MSIE 9\.\d/i.test(ua);
		versions[10] = () => /MSIE 10\.\d/i.test(ua);
		versions[11] = () => /Trident.*rv[ :]*11\./.test(ua);

		switch (operator) {
			case EQUAL: {
				const fn = versions[version];
				return typeof fn === 'function' && fn();
			}
			case MORE_THEN_OR_EQUAL:
				return versions.slice(version).some((fn) => fn());
			case LESS_THEN_OR_EQUAL:
				return versions.slice(0, version + 1).some((fn) => fn());
		}
	}
	return false;
};
