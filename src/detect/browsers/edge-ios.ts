import { DetectMethod } from '../../core';

/** Detect Microsoft Edge browser on iOS */
export const isEdgeIOS: DetectMethod = (ua) => /\sEdgiOS\//.test(ua);
