import isAndroid from '../os/android';
import __regexp from './__chrome-regexp';

/** Detect Google Chrome Browser on Android OS */
export default function isChromeAndroid(ua: string): boolean {
	return isAndroid(ua) && __regexp.test(ua);
}
