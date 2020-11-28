import { DetectVersionOperator } from './core';

export const MORE_THEN_OR_EQUAL = '>=';
export const EQUAL = '==';
export const LESS_THEN_OR_EQUAL = '<=';

export function matchVersion({
	ua,
	regExp,
	groupIndex,
	version,
	operator
}: {
	ua: string;
	regExp: RegExp;
	groupIndex: number;
	version: number;
	operator: DetectVersionOperator;
}) {
	const match = ua.match(regExp);
	if (match) {
		const value = parseFloat(match[groupIndex]);
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
