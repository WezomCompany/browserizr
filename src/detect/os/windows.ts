import __regexp from './__windows-regexp';

/** Detect the Windows OS */
export default function isWindows(ua: string): boolean {
	return __regexp.test(ua);
}
