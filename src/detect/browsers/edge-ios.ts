import { DetectMethod } from '../../core';

export const isEdgeIOS: DetectMethod = (ua) => /\sEdgiOS\//i.test(ua);
