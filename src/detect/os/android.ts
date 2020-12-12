import { DetectMethod } from '../../core';

/** Detect the Android OS */
export const isAndroid: DetectMethod = (ua) => /[\s(]Android\s\d+[;)]/i.test(ua);
