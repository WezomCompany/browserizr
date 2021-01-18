import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__ios-regexp';

/** Detect the iOS Version */
export default function isIOSVersion(operator: DetectVersionOperator, version: number) {
	return (ua: string): boolean =>
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 2,
			transformMatch: (v: string) => v.replace(/_/g, '.')
		});
}
