import { DetectMethod } from '../../core';

export const isSafari: DetectMethod = (ua) =>
	/ Safari\/\d/.test(ua) && !/ Chrome\/\d/.test(ua);
