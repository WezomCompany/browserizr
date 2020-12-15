import { DetectMethod } from '../../core';
import { isIOS } from '../os/ios';
import __safariRegexp from './__safari-regexp';

/** Detect Apple Safari Browser on iOS */
export const isSafariIOS: DetectMethod = (ua) => __safariRegexp.test(ua) && isIOS(ua);
