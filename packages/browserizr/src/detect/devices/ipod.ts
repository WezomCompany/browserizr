/** Detect a Browser on iPod device */
export default function isIPod(ua: string): boolean {
	return /iPod/i.test(ua);
}
