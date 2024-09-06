import { ICommentItemProps } from "../../../appTypes/props/Comment";
import { useGetUser } from "../../../queries/users/useGetUser";
import Typography from "../../common/Typography";
import Error from "../../utils/Error";
import Loader from "../../utils/Loader";
import {
	StyledComment,
	StyledCommentImage,
	StyledCommentInformation,
} from "./CommentItem.styled";

export default function CommentItem({ comment }: ICommentItemProps) {
	const { body, likes, user } = comment;
	const { data, isFetched, isLoading, isError } = useGetUser(user.id);

	return (
		<>
			<Loader isVisible={isLoading} />
			<Error isVisible={isError} />
			{isFetched ? (
				<>
					<StyledComment>
						<StyledCommentImage src={data?.image} />
						<div>
							<StyledCommentInformation>
								<Typography>
									<b>{user.fullName}</b>
								</Typography>
								<Typography variant="p">{body}</Typography>
							</StyledCommentInformation>
							<Typography variant="h5">{likes} likes</Typography>
						</div>
					</StyledComment>
				</>
			) : null}
		</>
	);
}
