import __regexp from './__edge-regexp';

/** Detect Microsoft Edge Browser */
export default function isEdge(ua: string): boolean {
	return __regexp.test(ua);
}
