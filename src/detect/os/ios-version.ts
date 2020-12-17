import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__ios-regexp';

/** Detect the Android OS Version */
export default function isAndroidVersion(
	operator: DetectVersionOperator,
	version: number
) {
	return (ua: string): boolean =>
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 2,
			transformMarch: (v: string) => v.replace(/_/g, '.')
		});
}
