import styled from "styled-components";

export const StyledTabButton = styled.button`
	flex: 1;
	border: none;
	border-bottom-width: 1.5px;
	border-bottom-style: solid;
	border-bottom-color: transparent;
	transition: border-color linear 0.2s;
	&:hover {
		border-color: ${(props) => props.theme.text.accent};
		background-color: ${(props) => props.theme.primary};
	}
`;

export const SelectedTabButton = styled(StyledTabButton)`
	border-color: ${(props) => props.theme.text.accent};
`;
