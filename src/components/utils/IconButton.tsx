import { StyledIconButton } from "./IconButton.styled";

export default function IconButton(
	props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>,
) {
	const { children, ...iconButtonProps } = props;

	return <StyledIconButton {...iconButtonProps}>{children}</StyledIconButton>;
}
