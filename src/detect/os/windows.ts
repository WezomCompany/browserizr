import { DetectMethod } from '../../core';

/** Detect the Windows OS */
export const isWindows: DetectMethod = (ua) => /[\s(]Windows\sNT\s[\d.]+[;)]/i.test(ua);
