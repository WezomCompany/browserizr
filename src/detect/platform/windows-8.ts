import { DetectMethod } from '../../core';
import { isWindows } from './windows';

export const isWindows8: DetectMethod = (ua, platform) =>
	isWindows(ua, platform) && /windows nt 6\.[2|3]/i.test(ua);
