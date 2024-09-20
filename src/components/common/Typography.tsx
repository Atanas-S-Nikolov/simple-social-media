import { StyledTypography } from "./Typography.styled";
import { ITypographyProps } from "../../appTypes/props/Typography";

export default function Typography(props: ITypographyProps) {
	const { children, ...typographyProps } = props;
	return <StyledTypography {...typographyProps}>{children}</StyledTypography>;
}
