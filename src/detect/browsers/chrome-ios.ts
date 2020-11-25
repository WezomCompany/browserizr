import { DetectMethod } from '../../core';

export const isChromeIOS: DetectMethod = (ua) => /\sCriOS\/[\d|.]+\sMobile/i.test(ua);
