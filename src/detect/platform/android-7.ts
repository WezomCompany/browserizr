import { DetectMethod } from '../../core';

export const isAndroid7: DetectMethod = (ua) => /android 7/i.test(ua);
