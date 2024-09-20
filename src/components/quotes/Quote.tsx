import { useState, MouseEvent } from "react";
import { quotesKeys } from "../../queries/queryKeys";
import { useGetRandomQuote } from "../../queries/quotes/useGetRandomQuote";

import {
	StyledQuote,
	StyledQuoteAuthor,
	StyledQuoteContainer,
	StyledQuoteText,
	StyledTabs,
} from "./Quote.styled";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import TabButton from "../common/TabButton";

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
		tooltip: "Display random quote",
		...DEFAULT_QUERY_CONFIG,
	},
	{
		text: "Hourly",
		tooltip: "Display random quote on every hour",
		queryKey: quotesKeys.oneRandomPerHour(),
		staleTime: ONE_HOUR_IN_MS,
	},
	{
		text: "Daily",
		tooltip: "Display random quote of the day",
		queryKey: quotesKeys.oneRandomPerDay(),
		staleTime: ONE_DAY_IN_MS,
	},
];

export default function Quote() {
	const queryConfigFromStorage = localStorage.getItem("queryConfigIndex");
	const [queryConfigIndex, setQueryConfigIndex] = useState(
		queryConfigFromStorage ? Number(JSON.parse(queryConfigFromStorage)) : 0,
	);
	const queryConfig = tabs[queryConfigIndex];
	const { isFetched, isError, isLoading, data } = useGetRandomQuote(
		queryConfig.queryKey,
		queryConfig.staleTime,
	);

	function handleOptionClick(_event: MouseEvent, index: number) {
		setQueryConfigIndex(index);
		localStorage.setItem("queryConfigIndex", index.toString());
	}

	return (
		<StyledQuoteContainer>
			<StyledTabs>
				{tabs.map((tab, index) => {
					return (
						<TabButton
							key={index}
							selected={index === queryConfigIndex}
							onClick={(event: MouseEvent) => handleOptionClick(event, index)}
							title={tab.tooltip}
						>
							{tab.text}
						</TabButton>
					);
				})}
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
