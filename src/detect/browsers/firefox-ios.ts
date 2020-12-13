import { DetectMethod } from '../../core';

/** Detect Mozilla Firefox Browser on iOS */
export const isFirefoxIOS: DetectMethod = (ua) => /\sFxiOS\/\d/.test(ua);
