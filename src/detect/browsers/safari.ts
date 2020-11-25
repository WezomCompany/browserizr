import { DetectMethod } from '../../core';
import { isChrome } from './chrome';

/** Detect Apple Safari browser */
export const isSafari: DetectMethod = (ua) => / Safari\/\d/.test(ua) && !isChrome(ua);
