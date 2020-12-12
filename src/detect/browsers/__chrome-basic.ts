/** Private method! Google Chrome browser basic recognition */
export default function (ua: string) {
	return /\sChrome\/[\d.]+\s(Mobile(\/[\d.]+)?\s)?Safari\/[\d.]+$/.test(ua);
}
