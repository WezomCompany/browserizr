import { DetectMethod } from '../../core';

export const isWindowsPhone: DetectMethod = (ua) => /Windows\sPhone/i.test(ua);
