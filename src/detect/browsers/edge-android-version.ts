import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__edge-android-regexp';

/** Detect Microsoft Edge Browser version on Android */
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
			groupIndex: 1,
			transformMarch: (version: string): string => {
				//
				const number = parseFloat(version);
				return number < 79 ? '79' : version;
			}
		});
}
