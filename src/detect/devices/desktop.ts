import { DetectMethod } from '../../core';
import { isMobile } from './mobile';

export const isDesktop: DetectMethod = (ua) => !isMobile(ua);
