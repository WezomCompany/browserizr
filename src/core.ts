export interface DetectMethod {
	(ua: string): boolean;
}

export type DetectVersionOperator = '>=' | '==' | '<=';

export interface DetectVersionMethod {
	(version: number, operator?: DetectVersionOperator): DetectMethod;
}

export interface DetectClassNameMethod {
	is: string;
	not: string;
	fn: DetectMethod;
}

export default (function (_ua) {
	return {
		setUA(userAgent: string) {
			_ua = userAgent;
		},
		detect(fn: DetectMethod) {
			return fn(_ua);
		},
		classNames(classes: DetectClassNameMethod[]) {
			return classes.map((item) => (item.fn(_ua) ? item.is : item.not));
		}
	};
})(typeof navigator !== 'undefined' ? navigator.userAgent : '');
