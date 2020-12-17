/** Detect a Browser on iPhone device */
export default function isIPhone(ua: string): boolean {
	return /iPhone/i.test(ua);
}
