import { DetectMethod } from '../../core';
import { isChromeIOS } from './chrome-ios';

export const isChrome: DetectMethod = (ua) =>
	/\sChrome\/[\d|.]+\s(Mobile(\/[\d|.]+)?\s)?Safari\/\d/i.test(ua) || isChromeIOS(ua);
