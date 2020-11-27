import { DetectMethod } from '../../core';

/** Detect Yandex browser */
export const isYandex: DetectMethod = (ua) => /\sYaBrowser\/[\d|.]+/.test(ua);
