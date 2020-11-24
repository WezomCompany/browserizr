import { DetectMethod } from '../../core';

export const isAndroid4: DetectMethod = (ua) => /android 4/i.test(ua);
