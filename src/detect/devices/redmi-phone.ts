import { DetectMethod } from '../../core';

export const isRedmiPhone: DetectMethod = (ua) => /Android\s.*Redmi\s/i.test(ua);
