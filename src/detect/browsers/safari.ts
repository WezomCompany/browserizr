import { DetectMethod } from '../../core';
import { isChrome } from './chrome';

export const isSafari: DetectMethod = (ua) => / Safari\/\d/.test(ua) && !isChrome(ua);
