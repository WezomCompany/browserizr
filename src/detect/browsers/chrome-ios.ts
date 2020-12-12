import { DetectMethod } from '../../core';

/** Detect Google Chrome Browser on iOS */
export const isChromeIOS: DetectMethod = (ua) => /\sCriOS\/[\d.]+\sMobile/.test(ua);
