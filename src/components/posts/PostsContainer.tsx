import { useGetPosts } from "../../queries/posts/useGetPosts";
import PostItem from "./PostItem";
import { StyledPostContainer } from "./PostContainer.styled";
import { useCallback, useMemo, useRef } from "react";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import Typography from "../common/Typography";

export default function PostsContainer() {
	const observer = useRef<IntersectionObserver>();
	const {
		isLoading,
		isFetching,
		isError,
		isFetched,
		hasNextPage,
		data,
		fetchNextPage,
	} = useGetPosts();

	const lastElementRef = useCallback(
		(node: HTMLDivElement) => {
			if (isLoading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage && !isFetching) {
					fetchNextPage();
				}
			});

			if (node) observer.current.observe(node);
		},
		[fetchNextPage, hasNextPage, isFetching, isLoading],
	);

	const flatData = useMemo(
		() => (data ? data?.pages.flatMap((page) => page.posts) : []),
		[data],
	);

	return (
		<StyledPostContainer>
			<Loader isVisible={isLoading} />
			<Error isVisible={isError} />
			{isFetched
				? flatData.map((post) => (
						<PostItem key={post.id} post={post} ref={lastElementRef} />
					))
				: null}
			{isFetching ? <Typography>Loading more posts...</Typography> : null}
		</StyledPostContainer>
	);
}
