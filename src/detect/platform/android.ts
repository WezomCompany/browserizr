import { DetectMethod } from '../../core';

export const isAndroid: DetectMethod = (ua) => /android/i.test(ua);
