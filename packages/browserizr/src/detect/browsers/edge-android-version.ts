import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__edge-android-regexp';

/** Detect Microsoft Edge Android Browser version */
export default function isChromeAndroidVersion(
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
