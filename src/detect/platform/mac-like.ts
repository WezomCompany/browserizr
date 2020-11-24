import { DetectMethod } from '../../core';
import { isMac } from './mac';
import { isIOS } from './ios';

export const isMacLike: DetectMethod = (ua, platform) =>
	isMac(ua, platform) || isIOS(ua, platform);
