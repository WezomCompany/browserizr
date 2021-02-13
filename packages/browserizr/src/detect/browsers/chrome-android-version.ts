import { DetectVersionOperator, matchVersion } from '../../utils';
import isAndroid from '../os/android';
import __regexp from './__chrome-regexp';

/** Detect Google Chrome Browser version on Android OS */
export default function isChromeAndroidVersion(
	operator: DetectVersionOperator,
	version: number
) {
	return (ua: string): boolean =>
		isAndroid(ua) &&
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 1
		});
}
