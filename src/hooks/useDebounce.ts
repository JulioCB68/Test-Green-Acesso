import { useRef } from "react";

export default function useDebounce(fn: Function, delay: number) {
	const timeoutRef = useRef<number>();

	function debounceFn(...args: string[]) {
		window.clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => {
			fn(...args);
		}, delay);
	}

	return debounceFn;
}
