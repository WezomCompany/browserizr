import { DetectMethod } from '../../core';

/** Detect Vivaldi Browser */
export const isVivaldi: DetectMethod = (ua) => /\sVivaldi\/[\d.]+/.test(ua);
