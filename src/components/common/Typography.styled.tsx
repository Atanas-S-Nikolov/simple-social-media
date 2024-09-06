import { createElement } from "react";
import styled from "styled-components";
import { ITypographyProps } from "../../appTypes/props/Typography";

export const StyledTypography = styled(
	({ variant, children, ...props }: ITypographyProps) =>
		createElement(variant || "span", props, children),
)`
	color: ${(props) => props.theme.text[props.$color || "primary"]};
`;
