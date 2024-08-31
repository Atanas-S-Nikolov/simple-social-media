import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "../queryKeys";
import { getPosts } from "../../services/PostService";
import { PostPagination } from "../../appTypes/Pagination";

export function useGetPosts() {
	return useQuery({
		queryKey: postsKeys.all(),
		queryFn: getPosts,
		initialData: new PostPagination(),
	});
}
