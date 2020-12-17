import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__mac-os-regexp';

/** Detect the macOS Version */
export default function isMacOSVersion(operator: DetectVersionOperator, version: number) {
	return (ua: string): boolean =>
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 1,
			transformMarch: (v: string) => v.replace(/_/g, '.')
		});
}
