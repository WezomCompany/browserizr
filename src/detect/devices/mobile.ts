/** Detect mobile browser */
export default function isMobile(ua: string): boolean {
	return /\sMobile(\/\d[\d.E]+|;)?\s/.test(ua);
}
