export type DetectVersionOperator = '>=' | '==' | '<=';
export const MORE_THEN_OR_EQUAL = '>=';
export const EQUAL = '==';
export const LESS_THEN_OR_EQUAL = '<=';

export function matchVersion({
	ua,
	regExp,
	groupIndex,
	version,
	operator,
	transformMarch = (v: string): string => v
}: {
	ua: string;
	regExp: RegExp;
	groupIndex: number;
	version: number;
	operator: DetectVersionOperator;
	transformMarch?: (v: string) => string;
}) {
	const match = ua.match(regExp);
	if (match) {
		const int = version === parseInt('' + version, 10);
		const _m = transformMarch(match[groupIndex]);
		const value = int ? parseInt(_m) : parseFloat(_m);
		if (isNaN(value)) {
			return false;
		} else {
			switch (operator) {
				case MORE_THEN_OR_EQUAL:
					return value >= version;
				case EQUAL:
					return value === version;
				case LESS_THEN_OR_EQUAL:
					return value <= version;
			}
		}
	} else {
		return false;
	}
}
