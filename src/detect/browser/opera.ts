import { DetectMethod } from '../../core';

export const isOpera: DetectMethod = (ua) => /Opera|OPR\//i.test(ua);
