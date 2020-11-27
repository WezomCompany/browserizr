import { DetectMethod } from '../../core';

/** Detect Vivaldi browser */
export const isVivaldi: DetectMethod = (ua) => /\sVivaldi\/[\d|.]+/.test(ua);
