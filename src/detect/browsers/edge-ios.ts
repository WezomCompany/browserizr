import __regexp from './__edge-ios-regexp';

/** Detect Microsoft Edge iOS Browser */
export default function isEdgeIOS(ua: string): boolean {
	return __regexp.test(ua);
}
