/** Detect Internet Explorer Browser */
export default function isIE(ua: string): boolean {
	return /(MSIE|Trident)/.test(ua);
}
