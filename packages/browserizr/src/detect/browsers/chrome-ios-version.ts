import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__chrome-ios-regexp';

/** Detect Google Chrome Browser version on iOS */
export default function isChromeIOSVersion(
	operator: DetectVersionOperator,
	version: number
) {
	return (ua: string): boolean =>
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 1
		});
}
