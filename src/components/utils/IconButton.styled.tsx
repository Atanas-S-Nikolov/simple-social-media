import styled from "styled-components";

export const StyledIconButton = styled.button`
    background-color: transparent;
    color: ${props => props.theme.text.accent};
    border: none;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    font-size: 22px;
    padding: 0px 10px;
    &:hover {
		background-color: ${props => props.theme.background};
	}
`;
