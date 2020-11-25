import { DetectMethod } from '../../core';

/** Detect Google Chrome browser on iOS */
export const isChromeIOS: DetectMethod = (ua) => /\sCriOS\/[\d|.]+\sMobile/i.test(ua);