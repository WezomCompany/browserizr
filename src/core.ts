export interface DetectMethod {
	(ua: string): boolean;
}

export type DetectVersionOperator = '>=' | '==' | '<=';

export interface DetectVersionMethod {
	(version: number, operator: DetectVersionOperator): DetectMethod;
}

export interface DetectClassNameMethod {
	is: string;
	not: string;
	fn: DetectMethod;
}

export default (function (_ua) {
	return {
		/** Set custom `userAgent` string */
		setUA(userAgent: string) {
			_ua = userAgent;
		},

		/** Detection by given function */
		detect(fn: DetectMethod) {
			return fn(_ua);
		},

		/** Generate CSS class names string */
		classNames(classes: DetectClassNameMethod[]) {
			return classes.map((item) => (item.fn(_ua) ? item.is : item.not));
		}
	};
})(typeof navigator !== 'undefined' ? navigator.userAgent : '');
