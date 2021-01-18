// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {
	EQUAL,
	LESS_THEN_OR_EQUAL,
	matchVersion,
	MORE_THEN_OR_EQUAL,
	transformMacOSorIPadOSVersionMatch
} from '../index';

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

describe('transformMacOSorIPadOSVersionMatch', () => {
	const cases: {
		params: Parameters<typeof transformMacOSorIPadOSVersionMatch>;
		expected: ReturnType<typeof transformMacOSorIPadOSVersionMatch>;
	}[] = [
		{
			params: ['10_1'],
			expected: '1001'
		},
		{
			params: ['10_1_1'],
			expected: '1001.1'
		},
		{
			params: ['10_7_15'],
			expected: '1007.15'
		},
		{
			params: ['10_10'],
			expected: '1010'
		},
		{
			params: ['10_10_5'],
			expected: '1010.5'
		}
	];
	cases.forEach(({ params, expected }, i) => {
		test(`The result should be equal to expected. Case #${++i}`, () => {
			const result = transformMacOSorIPadOSVersionMatch(...params);
			expect(result).toStrictEqual(expected);
		});
	});
});
