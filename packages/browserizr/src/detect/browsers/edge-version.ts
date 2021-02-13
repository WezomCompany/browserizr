import { DetectVersionOperator, matchVersion } from '../../utils';
import __regexp from './__edge-regexp';

/** Detect Microsoft Edge Browser version */
export default function isEdgeVersion(operator: DetectVersionOperator, version: number) {
	return (ua: string): boolean =>
		matchVersion({
			ua,
			version,
			operator,
			regExp: __regexp,
			groupIndex: 2
		});
}
