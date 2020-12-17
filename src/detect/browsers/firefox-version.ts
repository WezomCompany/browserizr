import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__firefox-regexp';
import isAndroid from '../os/android';

/** Detect Mozilla Firefox Browser version */
export default function isFirefoxVersion(
	operator: DetectVersionOperator,
	version: number
) {
	return (ua: string): boolean =>
		!isAndroid(ua) &&
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 1
		});
}
