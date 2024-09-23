import { useInfiniteQuery } from "@tanstack/react-query";
import { postsKeys } from "../queryKeys";
import { getPosts } from "../../services/PostService";

const OFFSET = 10;

export function useGetPosts() {
	return useInfiniteQuery({
		queryKey: postsKeys.all(),
		queryFn: ({ pageParam }) => getPosts(pageParam),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			const { skip, limit, total } = lastPage;
			const hasNextPage = skip + limit < total;
			return hasNextPage ? skip + OFFSET : undefined;
		},
	});
}
