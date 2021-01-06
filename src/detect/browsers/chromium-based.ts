import __regexp from './__chromium-based-regexp';

/** Detect Chromium-based Browser */
export default function isChromiumBased(ua: string): boolean {
	return __regexp.test(ua);
}
