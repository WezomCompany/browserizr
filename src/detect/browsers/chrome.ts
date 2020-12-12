import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __chromeBasic from './__chrome-basic';

/** Detect Google Chrome Browser */
export const isChrome: DetectMethod = (ua) => !isAndroid(ua) && __chromeBasic(ua);
