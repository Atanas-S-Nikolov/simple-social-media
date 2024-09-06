import { StyledTypography } from "./Typography.styled";
import { ITypographyProps } from "../../appTypes/props/Typography";

export default function Typography({
	className,
	children,
	variant,
	$color,
}: ITypographyProps) {
	return (
		<StyledTypography className={className} variant={variant} $color={$color}>
			{children}
		</StyledTypography>
	);
}
