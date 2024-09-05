import { ICommentItemProps } from "../../../appTypes/props/Comment";
import { useGetUser } from "../../../queries/users/useGetUser";
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
			{isLoading ? <div>Loading comment...</div> : null}
			{isError ? <div>Error during loading comment</div> : null}
			{isFetched ? (
				<>
					<StyledComment>
						<StyledCommentImage src={data?.image} />
						<div>
							<StyledCommentInformation>
								<p>
									<b>{user.fullName}</b>
								</p>
								<p>{body}</p>
							</StyledCommentInformation>
							<h5>{likes} likes</h5>
						</div>
					</StyledComment>
				</>
			) : null}
		</>
	);
}
