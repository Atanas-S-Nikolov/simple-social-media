import { LoaderProps } from "../../appTypes/props/Loader";
import Typography from "../common/Typography";

export default function Loader({ isVisible }: LoaderProps) {
	return <>{isVisible ? <Typography>Loading...</Typography> : null}</>;
}
