import { DetectMethod } from '../../core';

/** Detect mobile browser */
export const isMobile: DetectMethod = (ua) => /\sMobile(\/\d[\d.E]+|;)?\s/.test(ua);
