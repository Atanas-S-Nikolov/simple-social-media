import { HTMLAttributes } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Color = "primary" | "secondary" | "accent";

type IBaseTypographyProps<T> = HTMLAttributes<T | "div">;

export interface ITypographyProps
	extends IBaseTypographyProps<React.PropsWithChildren> {
	className?: string;
	variant?: Variant;
	$color?: Color;
}
