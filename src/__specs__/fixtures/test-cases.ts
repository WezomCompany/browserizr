import browserizr, { DetectMethod } from '../../core';

export const validTestCases = (detectFns: DetectMethod[], navigators: string[][]) => {
	navigators.forEach(([ua, platform], i) => {
		test('Valid detect #' + ++i, () => {
			browserizr.setUA(ua);
			browserizr.setPlatform(platform);
			expect(browserizr.detect(...detectFns)).toBeTruthy();
		});
	});
};

export const invalidTestCases = (detectFns: DetectMethod[], navigators: string[][]) => {
	navigators.forEach(([ua, platform], i) => {
		test('Invalid detect #' + ++i, () => {
			browserizr.setUA(ua);
			browserizr.setPlatform(platform);
			expect(browserizr.detect(...detectFns)).toBeFalsy();
		});
	});
};
