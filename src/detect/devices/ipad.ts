import { DetectMethod } from '../../core';

/** Detect a browser on iPad device */
export const isIPad: DetectMethod = (ua) => /iPad/i.test(ua);
