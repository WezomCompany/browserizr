/** Private method! Mozilla Firefox Browser basic recognition */
export default function (ua: string) {
	return /\sFirefox\/\d/.test(ua);
}
