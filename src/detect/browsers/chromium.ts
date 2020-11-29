import { DetectMethod } from '../../core';

/** Detect browsers that based on Chromium. */
export const isChromium: DetectMethod = (ua) => /\sChrome\/[\d.]+\s/.test(ua);
