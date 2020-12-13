import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __chromeRegexp from './__chrome-regexp';

/** Detect Google Chrome Browser on Android OS */
export const isChromeAndroid: DetectMethod = (ua) =>
	isAndroid(ua) && __chromeRegexp.test(ua);
