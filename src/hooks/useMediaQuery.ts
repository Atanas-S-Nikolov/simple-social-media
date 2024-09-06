import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const matchQueryList = window.matchMedia(query);
		function handleChange(event: MediaQueryListEvent) {
			setMatches(event.matches);
		}
		matchQueryList.addEventListener("change", handleChange);
		return () => {
			matchQueryList.removeEventListener("change", handleChange);
		};
	}, [query]);

	return matches;
}
