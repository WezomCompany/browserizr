import { DetectMethod } from '../../core';

/** Detect Mozilla Firefox browser on iOS */
export const isFirefoxIOS: DetectMethod = (ua) => / FxiOS\/\d/.test(ua);
