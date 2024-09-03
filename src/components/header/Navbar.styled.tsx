import styled from "styled-components";
import IconButton from "../utils/IconButton";

export const StyledHeader = styled.header`
	background-color: ${props => props.theme.primary};
	color: ${props => props.theme.text.primary};
	padding: 1em 0.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 1px 1px ${props => props.theme.border}
	
`;

export const StyledThemeIconButton = styled(IconButton)`
	color: ${props => props.theme.text.primary};
`;
