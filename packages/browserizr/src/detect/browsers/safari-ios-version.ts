import isIOS from '../os/ios';
import __regexp from './__safari-regexp';
import { DetectVersionOperator, matchVersion } from '../../utils';

/** Detect Apple Safari Browser version on IOS */
export default function isSafariIOSVersion(
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
		}) && isIOS(ua);
}
