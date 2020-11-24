import { DetectMethod } from '../../core';
import { isMobile } from './mobile';

export const isDesktop: DetectMethod = (ua, platform) => !isMobile(ua, platform);
