import { DetectMethod } from '../../core';

/** Detect Opera Browser */
export const isOpera: DetectMethod = (ua) => /Opera|OPR\//.test(ua);
