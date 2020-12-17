export default (function (_ua: string) {
	return {
		/** Set custom `userAgent` string */
		setUA(userAgent: string): void {
			_ua = userAgent;
		},

		/** Detection by given function */
		detect(fn: (ua: string) => boolean): boolean {
			return fn(_ua);
		},

		/** Generate CSS class names string */
		classNames(
			classes: {
				is: string;
				not: string;
				fn: (ua: string) => boolean;
			}[]
		): string[] {
			return classes.map((item) => (item.fn(_ua) ? item.is : item.not));
		}
	};
})(typeof navigator !== 'undefined' ? navigator.userAgent : '');
