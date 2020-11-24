import { DetectMethod } from '../../core';

export const isBlackBerry10: DetectMethod = (ua) => /BB10;/i.test(ua);
