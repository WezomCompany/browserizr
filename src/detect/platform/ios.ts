import { DetectMethod } from '../../core';
import { isIPad } from '../device/ipad';
import { isIPhone } from '../device/iphone';
import { isIPod } from '../device/ipod';

export const isIOS: DetectMethod = (ua, platform) =>
	isIPhone(ua, platform) || isIPad(ua, platform) || isIPod(ua, platform);
