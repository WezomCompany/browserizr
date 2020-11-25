import { DetectMethod } from '../../core';

/** Detect Microsoft Edge browser */
export const isEdge: DetectMethod = (ua) => /\sEdg(e)?\/\d/i.test(ua);
