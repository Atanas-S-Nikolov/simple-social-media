import { useQuery } from "@tanstack/react-query";
import { getQuote } from "../../services/QuoteService";

export function useGetRandomQuote(
	queryKey: Array<string | unknown>,
	staleTime: number,
) {
	return useQuery({
		queryKey,
		queryFn: getQuote,
		staleTime,
	});
}
