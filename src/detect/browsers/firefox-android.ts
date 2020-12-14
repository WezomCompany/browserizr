import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __firefoxRegexp from './__firefox-regexp';

/** Detect Mozilla Firefox Browser on Android OS */
export const isFirefoxAndroid: DetectMethod = (ua) =>
	__firefoxRegexp.test(ua) && isAndroid(ua);
