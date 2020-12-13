import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __chromeRegexp from './__chrome-regexp';

/** Detect Google Chrome Browser */
export const isChrome: DetectMethod = (ua) => !isAndroid(ua) && __chromeRegexp.test(ua);
