import { DetectMethod } from '../../core';

export const isAndroid6: DetectMethod = (ua) => /android 6/i.test(ua);
