import { DetectMethod } from '../../core';
import { isWindows } from './windows';

export const isWindows7: DetectMethod = (ua, platform) =>
	isWindows(ua, platform) && /windows nt 6\.1/i.test(ua);
