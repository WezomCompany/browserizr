import { DetectMethod } from '../../core';

export const isIPod: DetectMethod = (ua) => /iPod/i.test(ua);
