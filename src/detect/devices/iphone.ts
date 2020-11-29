import { DetectMethod } from '../../core';

/** Detect a browser on iPhone device */
export const isIPhone: DetectMethod = (ua) => /iPhone/i.test(ua);
