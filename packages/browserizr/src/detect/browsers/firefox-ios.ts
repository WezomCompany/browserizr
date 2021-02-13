import __regexp from './__firefox-ios-regexp';

/** Detect Mozilla Firefox iOS Browser */
export default function isFirefoxIOS(ua: string): boolean {
	return __regexp.test(ua);
}
