import { DetectMethod } from '../../core';

/** Detect Internet Explorer browser */
export const isIE: DetectMethod = (ua) => /(MSIE|Trident)/i.test(ua);
