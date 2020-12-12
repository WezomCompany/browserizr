import { DetectMethod } from '../../core';

/** Detect a Browser on iPod device */
export const isIPod: DetectMethod = (ua) => /iPod/i.test(ua);
