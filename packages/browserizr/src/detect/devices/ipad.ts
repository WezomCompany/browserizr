/** Detect a Browser on iPad device */
export default function isIPad(ua: string): boolean {
	return /iPad/i.test(ua);
}
