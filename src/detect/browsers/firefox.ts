import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __firefoxRegexp from './__firefox-regexp';

/** Detect Mozilla Firefox Browser */
export const isFirefox: DetectMethod = (ua) => __firefoxRegexp.test(ua) && !isAndroid(ua);
