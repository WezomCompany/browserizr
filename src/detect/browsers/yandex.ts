import { DetectMethod } from '../../core';

/** Detect Yandex Browser */
export const isYandex: DetectMethod = (ua) => /\sYaBrowser\/[\d.]+/.test(ua);
