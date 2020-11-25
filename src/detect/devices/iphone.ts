import { DetectMethod } from '../../core';

export const isIPhone: DetectMethod = (ua) => /iPhone/i.test(ua);
