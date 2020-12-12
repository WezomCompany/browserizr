import { DetectMethod } from '../../core';

/** Detect a Browser on iPhone device */
export const isIPhone: DetectMethod = (ua) => /iPhone/i.test(ua);
