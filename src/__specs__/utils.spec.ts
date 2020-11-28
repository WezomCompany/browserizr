// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { EQUAL, LESS_THEN_OR_EQUAL, matchVersion, MORE_THEN_OR_EQUAL } from '../utils';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Operators', () => {
	test('More than or equal', () => {
		expect(MORE_THEN_OR_EQUAL).toStrictEqual('>=');
	});
	test('Equal', () => {
		expect(EQUAL).toStrictEqual('==');
	});
	test('Less than or equal', () => {
		expect(LESS_THEN_OR_EQUAL).toStrictEqual('<=');
	});
});

describe('match', () => {
	test('More than or equal', () => {
		const match = matchVersion({
			ua: 'x/23',
			operator: MORE_THEN_OR_EQUAL,
			version: 23,
			regExp: /x\/([\d|.]+)/,
			groupIndex: 1
		});
		expect(match).toBeTruthy();
	});
});
