import { useState } from "react";
import { ICommentItemProps } from "../../../appTypes/props/Comment";
import { useGetUser } from "../../../queries/users/useGetUser";
import Typography from "../../common/Typography";
import Error from "../../utils/Error";
import Loader from "../../utils/Loader";
import {
	StyledComment,
	StyledCommentActions,
	StyledCommentImage,
	StyledCommentInformation,
	StyledLike,
} from "./CommentItem.styled";
import { useUpdateComment } from "../../../queries/comments/useUpdateComment";

export default function CommentItem({ comment }: ICommentItemProps) {
	const [currentComment, setCurrentComment] = useState(comment);
	const { body, likes, user } = currentComment;
	const { data, isFetched, isLoading, isError } = useGetUser(user.id);
	const updateCommentMutation = useUpdateComment();
	const [liked, setLiked] = useState(false);
	const likeText = liked ? "Dislike" : "Like";

	function toggleLike() {
		const newLikes = liked ? likes - 1 : likes + 1;
		const updatedComment = { ...currentComment, likes: newLikes };
		updateCommentMutation.mutate(updatedComment, {
			onSuccess: () => {
				setCurrentComment(updatedComment);
				setLiked((prevState) => !prevState);
			},
		});
	}

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
							<StyledCommentActions>
								<Typography variant="h5">{likes} likes</Typography>
								<StyledLike
									variant="h5"
									onClick={toggleLike}
								>
									{likeText}
								</StyledLike>
							</StyledCommentActions>
						</div>
					</StyledComment>
				</>
			) : null}
		</>
	);
}
