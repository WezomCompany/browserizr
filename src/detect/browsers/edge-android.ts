import { DetectMethod } from '../../core';

/** Detect Microsoft Edge browser on Android */
export const isEdgeAndroid: DetectMethod = (ua) => /\sEdgA\//.test(ua);
