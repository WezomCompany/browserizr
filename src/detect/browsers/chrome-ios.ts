import __regexp from './__chrome-ios-regexp';

/** Detect Google Chrome Browser on iOS */
export default function isChromeIOS(ua: string): boolean {
	return __regexp.test(ua);
}
