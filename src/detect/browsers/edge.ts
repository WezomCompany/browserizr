import { DetectMethod } from '../../core';

export const isEdge: DetectMethod = (ua) => / Edge\/\d/i.test(ua);
