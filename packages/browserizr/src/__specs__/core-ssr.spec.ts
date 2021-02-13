/**
 * @jest-environment node
 */

// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import browserizr from '../index';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('navigator.userAgent', () => {
	test('Should be an empty string in non-browser env', () => {
		let _ua = '';
		browserizr.detect((ua) => {
			_ua = ua;
			return false;
		});
		expect(_ua).toHaveLength(0);
	});
});
