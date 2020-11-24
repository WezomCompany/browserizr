import { DetectMethod } from '../../core';

export const isBlackBerry: DetectMethod = (ua) => /BlackBerry/i.test(ua);
