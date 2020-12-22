import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__edge-ios-regexp';

/** Detect Microsoft Edge iOS Browser version */
export default function isEdgeIOSVersion(
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
