import { DetectMethod } from '../../core';

export const isIE9: DetectMethod = (ua) => /MSIE 9\.\d/i.test(ua);
