import { DetectMethod } from '../../core';

export const isEdgeAndroid: DetectMethod = (ua) => /\sEdgA\//i.test(ua);
