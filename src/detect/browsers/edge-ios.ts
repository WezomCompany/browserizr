import { DetectMethod } from '../../core';

/** Detect Microsoft Edge Browser on iOS */
export const isEdgeIOS: DetectMethod = (ua) => /\sEdgiOS\//.test(ua);
