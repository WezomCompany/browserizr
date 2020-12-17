import isIPod from '../devices/ipod';
import isIPhone from '../devices/iphone';
import isIPad from '../devices/ipad';

/** Detect the iOS */
export default function isIOS(ua: string): boolean {
	return isIPhone(ua) || isIPad(ua) || isIPod(ua);
}
