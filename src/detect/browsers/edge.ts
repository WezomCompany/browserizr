import { DetectMethod } from '../../core';

export const isEdge: DetectMethod = (ua) => /\sEdg(e)?\/\d/i.test(ua);
