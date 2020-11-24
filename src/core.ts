interface DetectMethod {
	(ua: string, platform: string): boolean;
}

interface ClassNameMethod {
	is: string;
	not: string;
	detect: DetectMethod;
}

export default (function (navigator) {
	let _ua = navigator.userAgent;
	let _platform = navigator.platform;
	return {
		setUA(userAgent: string) {
			_ua = userAgent;
		},
		setPlatform(platform: string) {
			_platform = platform;
		},
		detect(...detects: DetectMethod[]) {
			return detects.every((fn) => fn(_ua, _platform));
		},
		classNames(...classes: ClassNameMethod[]) {
			return classes.map((item) =>
				item.detect(_ua, _platform) ? item.is : item.not
			);
		}
	};
})(typeof navigator !== 'undefined' ? navigator : { userAgent: '', platform: '' });
