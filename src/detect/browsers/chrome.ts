import { DetectMethod } from '../../core';

/** Detect Google Chrome browser */
export const isChrome: DetectMethod = (ua) =>
	/\sChrome\/[\d.]+\s(Mobile(\/[\d.]+)?\s)?Safari\/[\d.]+$/.test(ua);
