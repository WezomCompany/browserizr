import { DetectMethod } from '../../core';
import __regexp from './__windows-regexp';

/** Detect the Windows OS */
export const isWindows: DetectMethod = (ua) => __regexp.test(ua);
