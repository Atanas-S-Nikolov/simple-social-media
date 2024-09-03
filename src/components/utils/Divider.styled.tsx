import styled from "styled-components";

export const StyledDivider = styled.hr`
	width: 100%;
	background-color: ${props => props.theme.text.secondary};
	border: none;
	height: 0.5px;
`;
