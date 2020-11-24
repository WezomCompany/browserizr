import { DetectMethod } from '../../core';

export const isAndroid3: DetectMethod = (ua) => /android 3/i.test(ua);
