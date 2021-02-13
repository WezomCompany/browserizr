import isAndroid from '../os/android';
import __regexp from './__firefox-regexp';

/** Detect Mozilla Firefox Browser */
export default function isFirefox(ua: string): boolean {
	return __regexp.test(ua) && !isAndroid(ua);
}
