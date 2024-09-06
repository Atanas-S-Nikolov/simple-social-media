import { IComment } from "../Comment";

export interface ICommentsContainerProps {
	comments: IComment[];
}

export interface ICommentItemProps {
	comment: IComment;
}
