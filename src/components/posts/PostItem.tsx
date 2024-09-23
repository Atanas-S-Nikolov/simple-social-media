import { FaRegComment } from "react-icons/fa";
import { IPostItemProps } from "../../appTypes/props/Post";
import { IUser } from "../../appTypes/User";
import { useGetUser } from "../../queries/users/useGetUser";
import {
	StyledPostItem,
	StyledStatisticsSection,
	StyledUserImage,
	StyledPostItemHeader,
	StyledUserInfo,
	StyledPostActions,
	StyledPostButton,
	StyledPostDivider,
	StyledRatingsSection,
	StyledTextAction,
} from "./PostItem.styled";
import { BLUE, RED, TABLET } from "../../styles/variables";
import { forwardRef, useState } from "react";
import {
	AiFillDislike,
	AiFillLike,
	AiOutlineDislike,
	AiOutlineLike,
} from "react-icons/ai";
import { useGetPostComments } from "../../queries/posts/useGetPostComments";
import { ICommentPagination } from "../../appTypes/Pagination";
import IconButton from "../common/IconButton";
import { MdMoreVert } from "react-icons/md";
import { useUpdatePost } from "../../queries/posts/useUpdatePost";
import CommmentsContainer from "./comments/CommentsContainer";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import Typography from "../common/Typography";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const PostItem = forwardRef<HTMLElement, IPostItemProps>(({ post }, ref ) => {
	const [currentPost, setCurrentPost] = useState(post);
	const { id, title, body, reactions, views, userId } = currentPost;
	const updatePostMutation = useUpdatePost();
	const userQuery = useGetUser(userId);
	const commentsQuery = useGetPostComments(id);
	const isLoading = userQuery.isLoading && commentsQuery.isLoading;
	const isError = userQuery.isError && commentsQuery.isError;
	const isFetched = userQuery.isFetched && commentsQuery.isFetched;
	const [liked, setLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const [commentsVisible, setCommentsVisible] = useState(false);	
	const tablet = useMediaQuery(`(max-width: ${TABLET})`);
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
		const postLikes = reactions.likes;
		const newLikes = liked ? postLikes - 1 : postLikes + 1;
		const newReactions = { ...reactions, likes: newLikes };
		const updatedPost = { ...currentPost, reactions: newReactions };
		updatePostMutation.mutate(updatedPost, {
			onSuccess: () => {
				setCurrentPost(updatedPost);
				setLiked((prevState) => !prevState);
			},
		});
	}

	function toggleDislike() {
		const postDislikes = reactions.dislikes;
		const newDislikes = disliked ? postDislikes - 1 : postDislikes + 1;
		const newReactions = { ...reactions, dislikes: newDislikes };
		const updatedPost = { ...currentPost, reactions: newReactions };
		updatePostMutation.mutate(updatedPost, {
			onSuccess: () => {
				setCurrentPost(updatedPost);
				setDisliked((prevState) => !prevState);
			},
		});
	}

	function toggleComments() {
		setCommentsVisible((prevState) => !prevState);
	}

	function renderPost() {
		const { image, firstName, lastName } = userQuery.data as IUser;
		const fullName = firstName + " " + lastName;
		const { total, comments } = commentsQuery.data as ICommentPagination;

		return (
			<>
				<StyledPostItemHeader>
					<StyledUserInfo>
						<StyledUserImage src={image} alt={fullName} />
						<Typography variant="h1">{fullName}</Typography>
					</StyledUserInfo>
					<IconButton>
						<MdMoreVert />
					</IconButton>
				</StyledPostItemHeader>
				<Typography variant="h1">{title}</Typography>
				<Typography variant="p" $color="secondary">
					{body}
				</Typography>
				<div>
					<StyledStatisticsSection>
						<StyledRatingsSection>
							{!tablet ? (
								<>
									<Typography variant="h5">{reactions.likes} Likes</Typography>
									<Typography variant="h5">
										{reactions.dislikes} Dislikes
									</Typography>
								</>
							) : null}
							<Typography variant="h5">{views} Views</Typography>
						</StyledRatingsSection>
						{!tablet ? (
							<StyledTextAction onClick={toggleComments}>
								{total} Comments
							</StyledTextAction>
						) : null}
					</StyledStatisticsSection>
					<StyledPostDivider />
					<StyledPostActions>
						<StyledPostButton onClick={toggleLike}>
							{likeIcon}
							{tablet ? reactions.likes : <>Like</>}
						</StyledPostButton>
						<StyledPostButton onClick={toggleDislike}>
							{dislikeIcon}
							{tablet ? reactions.dislikes : <>Dislike</>}
						</StyledPostButton>
						<StyledPostButton onClick={toggleComments}>
							<FaRegComment fontSize={20} />
							{tablet ? total : <>Comment</>}
						</StyledPostButton>
					</StyledPostActions>
					{commentsVisible ? <StyledPostDivider /> : null}
				</div>
				{commentsVisible ? <CommmentsContainer comments={comments} /> : null}
			</>
		);
	}

	return (
		<StyledPostItem ref={ref}>
			<Loader isVisible={isLoading} />
			<Error isVisible={isError} />
			{isFetched ? renderPost() : null}
		</StyledPostItem>
	);
})

export default PostItem;
