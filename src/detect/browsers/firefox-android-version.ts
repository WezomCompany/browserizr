import { DetectVersionOperator, matchVersion } from '../../utils';
import isAndroid from '../os/android';
import __regexp from './__firefox-regexp';

/** Detect Mozilla Firefox Android Browser version */
export default function isFirefoxAndroidVersion(
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
