import { PostItemProps } from "../../appTypes/props/PostItemProps";
import { StyledPostItem, StyledStatisticsSection } from "./PostItem.styled";

export default function PostItem({ post }: PostItemProps) {
	const { title, body, reactions, views } = post;

	return (
		<StyledPostItem>
			<h1>{title}</h1>
			<p>{body}</p>
			<StyledStatisticsSection>
				<h5>{reactions.likes} Likes</h5>
				<h5>{reactions.dislikes} Dislikes</h5>
				<h5>{views} Views</h5>
			</StyledStatisticsSection>
		</StyledPostItem>
	);
}
