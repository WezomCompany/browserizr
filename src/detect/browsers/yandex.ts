import __regexp from './__yandex-regexp';

/** Detect Yandex Browser */
export default function isYandex(ua: string): boolean {
	return __regexp.test(ua);
}
