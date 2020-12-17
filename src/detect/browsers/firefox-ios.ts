import __regexp from './__firefox-ios-regexp';

/** Detect Mozilla Firefox Browser on iOS */
export default function isFirefoxIOS(ua: string): boolean {
	return __regexp.test(ua);
}
