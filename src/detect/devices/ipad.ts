import { DetectMethod } from '../../core';

/** Detect a Browser on iPad device */
export const isIPad: DetectMethod = (ua) => /iPad/i.test(ua);
