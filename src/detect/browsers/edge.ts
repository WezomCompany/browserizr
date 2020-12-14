import { DetectMethod } from '../../core';
import __edgeRegexp from './__edge-regexp';

/** Detect Microsoft Edge Browser */
export const isEdge: DetectMethod = (ua) => __edgeRegexp.test(ua);
