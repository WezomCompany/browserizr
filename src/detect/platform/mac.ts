import { DetectMethod } from '../../core';

export const isMac: DetectMethod = (ua, platform) => /Mac/.test(platform);
