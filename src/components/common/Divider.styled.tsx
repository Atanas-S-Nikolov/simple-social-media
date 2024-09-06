import styled from "styled-components";

export const StyledDivider = styled.hr`
	width: 100%;
	background-color: ${(props) => props.theme.border};
	border: none;
	height: 0.5px;
`;
