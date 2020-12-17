import { matchVersion, DetectVersionOperator } from '../../utils';
import isAndroid from '../os/android';
import __regexp from './__chrome-regexp';

/** Detect Google Chrome Browser version */
export default function isChromeVersion(
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
