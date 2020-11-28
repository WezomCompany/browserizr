import { DetectMethod } from '../../core';

export const isMobile: DetectMethod = (ua) => /\sMobile(\/\d[\d.E]+|;)?\s/.test(ua);
