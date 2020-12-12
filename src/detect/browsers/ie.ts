import { DetectMethod } from '../../core';

/** Detect Internet Explorer Browser */
export const isIE: DetectMethod = (ua) => /(MSIE|Trident)/.test(ua);
