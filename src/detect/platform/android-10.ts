import { DetectMethod } from '../../core';

export const isAndroid10: DetectMethod = (ua) => /android 10/i.test(ua);
