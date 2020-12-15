import { DetectMethod } from '../../core';
import __operaRegexp from './__opera-regexp';

/** Detect Opera Browser */
export const isOpera: DetectMethod = (ua) => __operaRegexp.test(ua);
