import __regexp from './__android-regexp';

/** Detect the Android OS */
export default function isAndroid(ua: string): boolean {
	return __regexp.test(ua);
}
