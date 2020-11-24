import { DetectMethod } from '../../core';

export const isAndroid5: DetectMethod = (ua) => /android 5/i.test(ua);
