import { DetectMethod } from '../../core';

/** Detect Mozilla Firefox browser */
export const isFirefox: DetectMethod = (ua) => / Firefox\/\d/i.test(ua);
