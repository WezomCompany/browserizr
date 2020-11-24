import { DetectMethod } from '../../core';

export const isAndroid8: DetectMethod = (ua) => /android 8/i.test(ua);
