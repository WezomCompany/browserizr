import { DetectMethod } from '../../core';

export const isIE8: DetectMethod = (ua) => /MSIE 8\.\d/i.test(ua);
