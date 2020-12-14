import { DetectMethod } from '../../core';
import __firefoxIOSRegexp from './__firefox-ios-regexp';

/** Detect Mozilla Firefox Browser on iOS */
export const isFirefoxIOS: DetectMethod = (ua) => __firefoxIOSRegexp.test(ua);
