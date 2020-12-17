// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { EQUAL, LESS_THEN_OR_EQUAL, matchVersion, MORE_THEN_OR_EQUAL } from '../index';

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
	test('toBeTruthy. Version number extract', () => {
		const match = matchVersion({
			ua: 'x/23',
			operator: MORE_THEN_OR_EQUAL,
			version: 23,
			regExp: /x\/([\d|.]+)/,
			groupIndex: 1
		});
		expect(match).toBeTruthy();
	});
	test('toBeTruthy. Float Version number extract', () => {
		const match = matchVersion({
			ua: 'x/14.456',
			operator: EQUAL,
			version: 14.456,
			regExp: /x\/([\d|.]+)/,
			groupIndex: 1
		});
		expect(match).toBeTruthy();
	});
	test('toBeFalsy. RegExp match', () => {
		const match = matchVersion({
			ua: 'x/xx',
			operator: MORE_THEN_OR_EQUAL,
			version: 23,
			regExp: /x\/([\d|.]+)/,
			groupIndex: 1
		});
		expect(match).toBeFalsy();
	});
	test('toBeFalsy. Version number extract', () => {
		const match = matchVersion({
			ua: 'x/...5',
			operator: MORE_THEN_OR_EQUAL,
			version: 23,
			regExp: /x\/([\d|.]+)/,
			groupIndex: 1
		});
		expect(match).toBeFalsy();
	});
});
