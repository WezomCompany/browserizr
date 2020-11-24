import { DetectMethod } from '../../core';

export const isMobile: DetectMethod = (ua) => /\sMobile\s/i.test(ua);
