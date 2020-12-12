import { DetectMethod } from '../../core';

/** Detect Microsoft Edge Browser */
export const isEdge: DetectMethod = (ua) => /\sEdg(e)?\/\d/.test(ua);
