import styled from "styled-components";
import Typography from "../common/Typography";

export const StyledQuoteContainer = styled.section`
	max-width: 400px;
	margin-bottom: 2em;
	@media (max-width: 500px) {
		margin-left: 1em;
		margin-right: 1em;
	}
`;

export const StyledQuote = styled.section`
	background-color: ${(props) => props.theme.primary};
	box-shadow: 0px 0px 4px ${(props) => props.theme.border};
	border-radius: 5px;
	text-align: center;
	padding: 1em;
	display: grid;
	gap: 10px;
`;

export const StyledQuoteText = styled(Typography)`
	font-family: "Satisfy", cursive;
	color: ${(props) => props.theme.text.accent};
`;

export const StyledQuoteAuthor = styled(Typography)`
	font-style: italic;
	font-weight: bold;
`;

export const StyledTabs = styled.section`
	display: flex;
	margin-bottom: 5px;
	gap: 5px;
`;

export const TabButton = styled.button`
	flex: 1;
	border: none;
	border-bottom-width: 1.5px;
	border-bottom-style: solid;
	border-bottom-color: transparent;
	transition: border-color linear .2s;
	&:hover {
		border-color: ${(props) => props.theme.text.accent};
		background-color: ${(props) => props.theme.primary};
	}
`;
