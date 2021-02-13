import isMobile from './mobile';

/** Detect desktop browser */

export default function isDesktop(ua: string): boolean {
	return !isMobile(ua);
}
