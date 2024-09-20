import { useState, MouseEvent } from "react";
import { quotesKeys } from "../../queries/queryKeys";
import { useGetRandomQuote } from "../../queries/quotes/useGetRandomQuote";
import {
	StyledQuote,
	StyledQuoteAuthor,
	StyledQuoteContainer,
	StyledQuoteText,
	StyledTabs,
	TabButton,
} from "./Quote.styled";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import { FaQuoteRight } from "react-icons/fa";
import {
	ONE_DAY_IN_MS,
	ONE_HOUR_IN_MS,
	ONE_MINUTE_IN_MS,
} from "../../constants/TimeConstants";

const DEFAULT_QUERY_CONFIG = {
	queryKey: quotesKeys.oneRandom(),
	staleTime: ONE_MINUTE_IN_MS,
};

const tabs = [
	{
		text: "Random",
		...DEFAULT_QUERY_CONFIG,
	},
	{
		text: "Hourly",
		queryKey: quotesKeys.oneRandomPerHour(),
		staleTime: ONE_HOUR_IN_MS,
	},
	{
		text: "Daily",
		queryKey: quotesKeys.oneRandomPerDay(),
		staleTime: ONE_DAY_IN_MS,
	},
];

export default function Quote() {
	const queryConfigFromStorage = localStorage.getItem("queryConfig");
	const [queryConfig, setQueryConfig] = useState(
		queryConfigFromStorage
			? JSON.parse(queryConfigFromStorage)
			: DEFAULT_QUERY_CONFIG,
	);
	const { isFetched, isError, isLoading, data } = useGetRandomQuote(
		queryConfig.queryKey,
		queryConfig.staleTime,
	);

	function handleOptionClick(_event: MouseEvent, index: number) {
		const { queryKey, staleTime } = tabs[index];
		const updatedQueryConfig = { queryKey, staleTime };
		setQueryConfig(updatedQueryConfig);
		localStorage.setItem("queryConfig", JSON.stringify(updatedQueryConfig));
	}

	return (
		<StyledQuoteContainer>
			<StyledTabs>
				{tabs.map((tab, index) => (
					<TabButton
						key={index}
						onClick={(event: MouseEvent) => handleOptionClick(event, index)}
					>
						{tab.text}
					</TabButton>
				))}
			</StyledTabs>
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
		</StyledQuoteContainer>
	);
}
