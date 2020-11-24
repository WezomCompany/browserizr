import { DetectMethod } from '../../core';

export const isAndroid9: DetectMethod = (ua) => /android 9/i.test(ua);
