import __regexp from './__yandex-regexp';
import { DetectVersionOperator, matchVersion } from '../../utils';

/** Detect Yandex Browser */
export default function isYandexVersion(
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
