type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Color = "primary" | "secondary" | "accent";

export interface ITypographyProps extends React.PropsWithChildren {
	className?: string;
	variant?: Variant;
	$color?: Color;
}
