// PRIVATE DATA!
// DO NOT IMPORT THIS DIRECTLY IN YOUR PROJECT!
// IT CAN BE CHANGED AT ANY TIME
export default function (ua: string) {
	return /\sFirefox\/\d/.test(ua);
}
