import { DetectMethod } from '../../core';

export const isIE11: DetectMethod = (ua) => /Trident.*rv[ :]*11\./.test(ua);
