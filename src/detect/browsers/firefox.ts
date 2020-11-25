import { DetectMethod } from '../../core';
import { isFirefoxIOS } from './firefox-ios';

export const isFirefox: DetectMethod = (ua) =>
	/ Firefox\/\d/i.test(ua) || isFirefoxIOS(ua);
