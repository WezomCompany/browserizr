import { DetectMethod } from '../../core';
import { isMobile } from './mobile';

/** Detect desktop browser */
export const isDesktop: DetectMethod = (ua) => !isMobile(ua);
