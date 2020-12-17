import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__firefox-ios-regexp';

/** Detect Mozilla Firefox Browser version on iOS */
export default function isFirefoxIOSVersion(
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
