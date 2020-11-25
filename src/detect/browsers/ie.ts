import { DetectMethod } from '../../core';

export const isIE: DetectMethod = (ua) => /(MSIE|Trident)/i.test(ua);
