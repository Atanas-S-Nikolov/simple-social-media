import { ICommentsContainerProps } from "../../../appTypes/props/Comment";
import Divider from "../../utils/Divider";
import CommentItem from "./CommentItem";
import { StyledCommentsContainer } from "./CommentsContainer.styled";

export default function CommmentsContainer({
	comments,
}: ICommentsContainerProps) {
    const hasComments = comments.length > 0;

	return (
		<>
			{hasComments ?<Divider /> : null}
			<StyledCommentsContainer>
				{comments.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</StyledCommentsContainer>
		</>
	);
}
