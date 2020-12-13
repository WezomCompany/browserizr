import { DetectMethod } from '../../core';
import __chromeIOSRegexp from './__chrome-ios-regexp';

/** Detect Google Chrome Browser on iOS */
export const isChromeIOS: DetectMethod = (ua) => __chromeIOSRegexp.test(ua);
