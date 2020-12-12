import { DetectMethod } from '../../core';

/** Detect Microsoft Edge Browser on Android */
export const isEdgeAndroid: DetectMethod = (ua) => /\sEdgA\//.test(ua);
