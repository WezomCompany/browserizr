import __regexp from './__ios-regexp';

/** Detect the iOS */
export default function isIOS(ua: string): boolean {
	return __regexp.test(ua);
}
