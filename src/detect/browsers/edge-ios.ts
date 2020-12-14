import { DetectMethod } from '../../core';
import __edgeIOSRegexp from './__edge-ios-regexp';

/** Detect Microsoft Edge Browser on iOS */
export const isEdgeIOS: DetectMethod = (ua) => __edgeIOSRegexp.test(ua);
