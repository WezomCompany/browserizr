import { DetectMethod } from '../../core';

/** Detect Mozilla Firefox Browser */
export const isFirefox: DetectMethod = (ua) => / Firefox\/\d/.test(ua);
