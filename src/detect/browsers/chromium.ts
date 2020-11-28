import { DetectMethod } from '../../core';

/** Detect Chromium "family" browsers */
export const isChromium: DetectMethod = (ua) => /\sChrome\/[\d.]+\s/.test(ua);
