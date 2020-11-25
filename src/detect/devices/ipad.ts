import { DetectMethod } from '../../core';

export const isIPad: DetectMethod = (ua) => /iPad/i.test(ua);
