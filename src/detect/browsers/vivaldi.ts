import { DetectMethod } from '../../core';
import { isChrome } from './chrome';

/** Detect Vivaldi browser */
export const isVivaldi: DetectMethod = (ua) =>
	/\sVivaldi\/[\d|.]+/i.test(ua) && !isChrome(ua);
