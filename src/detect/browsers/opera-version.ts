import __operaRegexp from './__opera-regexp';
import { DetectVersionOperator, matchVersion } from '../../utils';

/** Detect Opera Browser version */
export default function isOperaVersion(operator: DetectVersionOperator, version: number) {
	return (ua: string): boolean =>
		matchVersion({
			ua,
			version,
			operator,
			regExp: __operaRegexp,
			groupIndex: 1
		});
}
