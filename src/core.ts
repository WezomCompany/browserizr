export interface DetectMethod {
	(ua: string): boolean;
}

export type DetectVersionOperator = '>=' | '==' | '<=';

export interface DetectVersionMethod {
	(operator: DetectVersionOperator, version: number): DetectMethod;
}

export interface DetectClassNameMethod {
	is: string;
	not: string;
	fn: DetectMethod;
}

export default (function (_ua) {
	return {
		/** Set custom `userAgent` string */
		setUA(userAgent: string): void {
			_ua = userAgent;
		},

		/** Detection by given function */
		detect(fn: DetectMethod): boolean {
			return fn(_ua);
		},

		/** Generate CSS class names string */
		classNames(classes: DetectClassNameMethod[]): string[] {
			return classes.map((item) => (item.fn(_ua) ? item.is : item.not));
		}
	};
})(typeof navigator !== 'undefined' ? navigator.userAgent : '');
