import { DetectMethod } from '../../core';

/** Detect Apple Safari browser */
export const isSafari: DetectMethod = (ua) =>
	/\)\sVersion\/[\d.]+\d\s(Mobile\/[\dE.]+\s)?Safari\/[\d.]+\d$/.test(ua);
