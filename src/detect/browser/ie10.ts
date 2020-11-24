import { DetectMethod } from '../../core';

export const isIE10: DetectMethod = (ua) => /MSIE 10\.\d/i.test(ua);
