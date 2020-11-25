import { DetectMethod } from '../../core';

export const isFirefoxIOS: DetectMethod = (ua) => / FxiOS\/\d/i.test(ua);
