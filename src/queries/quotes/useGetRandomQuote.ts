import { useQuery } from "@tanstack/react-query";
import { getQuote } from "../../services/QuoteService";

export function useGetRandomQuote(queryKey: Array<string | unknown>) {
    return useQuery({
        queryKey,
        queryFn: getQuote,
    });
}
