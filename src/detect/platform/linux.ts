import { DetectMethod } from '../../core';

export const isLinux: DetectMethod = (ua, platform) => /^linux/i.test(platform);
