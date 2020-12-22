import isAndroid from '../os/android';
import __regexp from './__firefox-regexp';

/** Detect Mozilla Firefox Android Browser */
export default function isFirefoxAndroid(ua: string): boolean {
	return __regexp.test(ua) && isAndroid(ua);
}
