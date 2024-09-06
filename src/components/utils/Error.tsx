import { ErrorProps } from "../../appTypes/props/Error";
import Typography from "../common/Typography";

export default function Error({ isVisible }: ErrorProps) {
	return (
		<>{isVisible ? <Typography>Error during loading!</Typography> : null}</>
	);
}
