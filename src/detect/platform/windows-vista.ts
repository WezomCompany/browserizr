import { DetectMethod } from '../../core';
import { isWindows } from './windows';

export const isWindowsVista: DetectMethod = (ua, platform) =>
	isWindows(ua, platform) && /windows nt 6\.0/i.test(ua);
