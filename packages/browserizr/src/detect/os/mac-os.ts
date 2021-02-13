import __regexp from './__mac-os-regexp';

/** Detect the macOS */
export default function isMacOS(ua: string): boolean {
	return __regexp.test(ua);
}
