import __regexp from './__vivaldi-regexp';

/** Detect Vivaldi Browser */
export default function isVivaldi(ua: string): boolean {
	return __regexp.test(ua);
}
