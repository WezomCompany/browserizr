import isAndroid from '../os/android';
import __regexp from './__chrome-regexp';

/** Detect Google Chrome Browser */
export default function isChrome(ua: string): boolean {
	return !isAndroid(ua) && __regexp.test(ua);
}
