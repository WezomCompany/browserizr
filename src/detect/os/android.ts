import { DetectMethod } from '../../core';

/** Detect the Android OS */
export const isAndroidOS: DetectMethod = (ua) => /[\s(]Android\s\d+[;)]/i.test(ua);
