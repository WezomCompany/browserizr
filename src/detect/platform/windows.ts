import { DetectMethod } from '../../core';

export const isWindows: DetectMethod = (ua, platform) => /^win/i.test(platform);
