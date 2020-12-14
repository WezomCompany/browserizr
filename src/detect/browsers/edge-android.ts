import { DetectMethod } from '../../core';
import __edgeAndroidRegexp from './__edge-android-regexp';

/** Detect Microsoft Edge Browser on Android */
export const isEdgeAndroid: DetectMethod = (ua) => __edgeAndroidRegexp.test(ua);
