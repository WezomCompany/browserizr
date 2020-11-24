import { DetectMethod } from '../../core';
import { isWindows } from './windows';

export const isWindows10: DetectMethod = (ua, platform) =>
	isWindows(ua, platform) && /windows nt 10/i.test(ua);
