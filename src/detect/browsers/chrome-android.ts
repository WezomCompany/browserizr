import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __chromeBasic from './__chrome-basic';

/** Detect Google Chrome Browser on Android OS */
export const isChromeAndroid: DetectMethod = (ua) => isAndroid(ua) && __chromeBasic(ua);
