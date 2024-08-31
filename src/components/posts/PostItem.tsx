import { FaExternalLinkAlt, FaRegComment } from "react-icons/fa";
import { IPostItemProps } from "../../appTypes/props/PostItemProps";
import { IUser } from "../../appTypes/User";
import { useGetUser } from "../../queries/users/useGetUser";
import {
	StyledPostItem,
	StyledStatisticsSection,
	StyledUserImage,
	StyledPostItemHeader,
	StyledUserInfo,
	StyledTextSecondary,
	StyledPostActions,
	StyledPostButton,
	StyledPostDivider,
	StyledRatingsSection,
} from "./PostItem.styled";
import { BLUE, RED, TEXT_DARK_GRAY } from "../../styles/variables";
import { useState } from "react";
import {
	AiFillDislike,
	AiFillLike,
	AiOutlineDislike,
	AiOutlineLike,
} from "react-icons/ai";
import { useGetPostComments } from "../../queries/posts/useGetPostComments";
import { ICommentPagination } from "../../appTypes/Pagination";

export default function PostItem({ post }: IPostItemProps) {
	const { id, title, body, reactions, views, userId } = post;
	const userQuery = useGetUser(userId);
	const commentsQuery = useGetPostComments(id);
	const isLoading = userQuery.isLoading && commentsQuery.isLoading;
	const isError = userQuery.isError && commentsQuery.isError;
	const isFetched = userQuery.isFetched && commentsQuery.isFetched;
	const [liked, setLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const likeIcon = liked ? (
		<AiFillLike fontSize={20} color={BLUE} />
	) : (
		<AiOutlineLike fontSize={20} />
	);
	const dislikeIcon = disliked ? (
		<AiFillDislike fontSize={20} color={RED} />
	) : (
		<AiOutlineDislike fontSize={20} />
	);

	function toggleLike() {
		setLiked((prevState) => !prevState);
	}

	function toggleDislike() {
		setDisliked((prevState) => !prevState);
	}

	function renderPost() {
		const { image, firstName, lastName } = userQuery.data as IUser;
		const fullName = firstName + " " + lastName;
		const { total } = commentsQuery.data as ICommentPagination;

		return (
			<>
				<StyledPostItemHeader>
					<StyledUserInfo>
						<StyledUserImage src={image} alt={fullName} />
						<h1>{fullName}</h1>
					</StyledUserInfo>
					<FaExternalLinkAlt color={TEXT_DARK_GRAY} />
				</StyledPostItemHeader>
				<h1>{title}</h1>
				<StyledTextSecondary>{body}</StyledTextSecondary>
				<div>
					<StyledStatisticsSection>
						<StyledRatingsSection>
							<h5>{reactions.likes} Likes</h5>
							<h5>{reactions.dislikes} Dislikes</h5>
							<h5>{views} Views</h5>
						</StyledRatingsSection>
						<h5>{total} Comments</h5>
					</StyledStatisticsSection>
					<StyledPostDivider />
					<StyledPostActions>
						<StyledPostButton onClick={toggleLike}>
							{likeIcon}
							Like
						</StyledPostButton>
						<StyledPostButton onClick={toggleDislike}>
							{dislikeIcon}
							Dislike
						</StyledPostButton>
						<StyledPostButton>
							<FaRegComment fontSize={20} />
							Comment
						</StyledPostButton>
					</StyledPostActions>
				</div>
			</>
		);
	}

	return (
		<StyledPostItem>
			{isLoading ? <h1>Post is loading...</h1> : null}
			{isError ? <h1>Error</h1> : null}
			{isFetched ? renderPost() : null}
		</StyledPostItem>
	);
}
