import __regexp from './__opera-regexp';

/** Detect Opera Browser */
export default function isOpera(ua: string): boolean {
	return __regexp.test(ua);
}
