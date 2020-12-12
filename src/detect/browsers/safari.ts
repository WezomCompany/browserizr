import { DetectMethod } from '../../core';

/** Detect Apple Safari Browser */
export const isSafari: DetectMethod = (ua) =>
	/\)\sVersion\/[\d.]+\d\s(Mobile\/[\dE.]+\s)?Safari\/[\d.]+\d$/.test(ua);
