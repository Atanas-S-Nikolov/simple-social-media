import styled from "styled-components";
import Typography from "../common/Typography";

export const StyledQuote = styled.section`
	background-color: ${(props) => props.theme.primary};
	box-shadow: 0px 0px 4px ${(props) => props.theme.border};
	border-radius: 5px;
	text-align: center;
	padding: 1em;
	margin-bottom: 2em;
	max-width: 400px;
	display: grid;
	gap: 10px;
    @media (max-width: 500px) {
		margin-left: 1em;
		margin-right: 1em;
	}
`;

export const StyledQuoteText = styled(Typography)`
	font-family: "Satisfy", cursive;
	color: ${(props) => props.theme.text.accent};
`;

export const StyledQuoteAuthor = styled(Typography)`
	font-style: italic;
	font-weight: bold;
`;
