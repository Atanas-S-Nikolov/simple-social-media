import { useGetPosts } from "../../queries/posts/useGetPosts";
import PostItem from "./PostItem";
import { StyledPostContainer, StyledTypography } from "./PostContainer.styled";
import { useCallback, useMemo, useRef } from "react";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

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
		(node: HTMLElement) => {
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
				? flatData.map((post, index) => {
						const isPageLastElement = index === flatData.length - 1;
						return (
							<PostItem
								key={post.id}
								post={post}
								ref={isPageLastElement ? lastElementRef : null}
							/>
						);
					})
				: null}
			{isFetching ? (
				<StyledTypography>Loading more posts...</StyledTypography>
			) : null}
		</StyledPostContainer>
	);
}
