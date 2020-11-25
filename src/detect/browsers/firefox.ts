import { DetectMethod } from '../../core';

export const isFirefox: DetectMethod = (ua) => / Firefox\/\d/i.test(ua);
