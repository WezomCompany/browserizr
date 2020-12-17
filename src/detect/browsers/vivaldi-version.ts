import __regexp from './__vivaldi-regexp';
import { DetectVersionOperator, matchVersion } from '../../utils';

/** Detect Vivaldi Browser */
export default function isVivaldiVersion(
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
