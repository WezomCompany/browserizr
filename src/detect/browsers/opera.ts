import { DetectMethod } from '../../core';

/** Detect Opera browser */
export const isOpera: DetectMethod = (ua) => /Opera|OPR\//i.test(ua);
