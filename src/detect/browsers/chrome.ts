import { DetectMethod } from '../../core';

export const isChrome: DetectMethod = (ua) =>
	/\sChrome\/[\d|.]+\s(Mobile(\/[\d|.]+)?\s)?Safari\/[\d|.]+$/i.test(ua);
