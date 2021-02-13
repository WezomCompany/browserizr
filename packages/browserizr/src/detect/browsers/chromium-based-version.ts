import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__chromium-based-regexp';

/** Detect Chromium-based Browser version */
export default function isChromiumBasedVersion(
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
