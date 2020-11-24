export interface DetectMethod {
	(ua: string, platform: string): boolean;
}

export interface DetectClassNameMethod {
	is: string;
	not: string;
	detect: DetectMethod;
}

export default (function ([_ua, _platform]) {
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
		classNames(classes: DetectClassNameMethod[]) {
			return classes.map((item) =>
				item.detect(_ua, _platform) ? item.is : item.not
			);
		}
	};
})(
	typeof navigator !== 'undefined'
		? [navigator.userAgent, navigator.platform]
		: ['', '']
);
