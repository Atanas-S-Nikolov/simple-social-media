import { useGetPosts } from "../../queries/posts/useGetPosts";
import PostItem from "./PostItem";
import { StyledPostContainer } from "./PostContainer.styled";

export default function PostsContainer() {
	const postsQuery = useGetPosts();

	if (postsQuery.isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<StyledPostContainer>
			{postsQuery.isFetched
				? postsQuery.data.posts.map((post) => (
						<PostItem key={post.id} post={post} />
					))
				: null}
		</StyledPostContainer>
	);
}
