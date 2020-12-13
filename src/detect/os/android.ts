import { DetectMethod } from '../../core';
import __regexp from './__android-regexp';

/** Detect the Android OS */
export const isAndroid: DetectMethod = (ua) => __regexp.test(ua);
