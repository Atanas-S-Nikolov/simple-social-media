import { ICommentsContainerProps } from "../../../appTypes/props/Comment";
import CommentItem from "./CommentItem";
import { StyledCommentsContainer } from "./CommentsContainer.styled";

export default function CommmentsContainer({
	comments,
}: ICommentsContainerProps) {
	return (
		<>
			<StyledCommentsContainer>
				{comments.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</StyledCommentsContainer>
		</>
	);
}
