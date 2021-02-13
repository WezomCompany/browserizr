import isIOS from '../os/ios';
import __regexp from './__safari-regexp';

/** Detect Apple Safari Browser */
export default function isSafari(ua: string): boolean {
	return __regexp.test(ua) && !isIOS(ua);
}
