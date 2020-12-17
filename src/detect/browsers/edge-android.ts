import __regexp from './__edge-android-regexp';

/** Detect Microsoft Edge Browser on Android */
export default function isEdgeAndroid(ua: string) {
	return __regexp.test(ua);
}
