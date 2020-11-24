import { DetectMethod } from '../../core';

export const isFirefox: DetectMethod = (ua) => / Firefox\//i.test(ua);
