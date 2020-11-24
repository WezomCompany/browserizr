import { DetectMethod } from '../../core';
import { isWindows } from './windows';

export const isWindowsXP: DetectMethod = (ua, platform) =>
	isWindows(ua, platform) && /windows nt 5\.1/i.test(ua);
