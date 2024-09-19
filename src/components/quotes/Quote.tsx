import { useState } from "react";
import { quotesKeys } from "../../queries/queryKeys";
import { useGetRandomQuote } from "../../queries/quotes/useGetRandomQuote";
import { StyledQuote, StyledQuoteAuthor, StyledQuoteText } from "./Quote.styled";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import { FaQuoteRight } from "react-icons/fa";

export default function Quote() {
	const [queryKey, setQueryKey] = useState(quotesKeys.oneRandom());
	const { isFetched, isError, isLoading, data } = useGetRandomQuote(queryKey);

	return (
		<StyledQuote>
			<Loader isVisible={isLoading} />
			<Error isVisible={isError} />
			{isFetched ? (
				<>
                    <FaQuoteRight />
					<StyledQuoteText variant="p">{data?.quote}</StyledQuoteText>
					<StyledQuoteAuthor>{data?.author}</StyledQuoteAuthor>
				</>
			) : null}
		</StyledQuote>
	);
}

