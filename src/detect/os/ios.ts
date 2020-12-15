import { DetectMethod } from '../../core';
import { isIPod } from '../devices/ipod';
import { isIPhone } from '../devices/iphone';
import { isIPad } from '../devices/ipad';

/** Detect the iOS */
export const isIOS: DetectMethod = (ua) => isIPhone(ua) || isIPad(ua) || isIPod(ua);
