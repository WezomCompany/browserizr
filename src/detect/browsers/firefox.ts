import { DetectMethod } from '../../core';
import { isAndroid } from '../os/android';
import __firefoxBasic from './__firefox-basic';

/** Detect Mozilla Firefox Browser */
export const isFirefox: DetectMethod = (ua) => __firefoxBasic(ua) && !isAndroid(ua);
