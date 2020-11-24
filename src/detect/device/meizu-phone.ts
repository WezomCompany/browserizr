import { DetectMethod } from '../../core';

export const isMeizuPhone: DetectMethod = (ua) => /Android\s.*MZ(-)?/i.test(ua);
