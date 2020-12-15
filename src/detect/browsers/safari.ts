import { DetectMethod } from '../../core';
import { isIOS } from '../os/ios';
import __safariRegexp from './__safari-regexp';

/** Detect Apple Safari Browser */
export const isSafari: DetectMethod = (ua) => __safariRegexp.test(ua) && !isIOS(ua);
