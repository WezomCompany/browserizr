import isIOS from '../os/ios';
import __regexp from './__safari-regexp';

/** Detect Apple Safari Browser on iOS */
export default function isSafariIOS(ua: string): boolean {
	return __regexp.test(ua) && isIOS(ua);
}
