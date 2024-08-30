import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "../queryKeys";
import { getPosts } from "../../services/PostService";

export function useGetPosts() {
	return useQuery({
		queryKey: postsKeys.all(),
		queryFn: getPosts,
		initialData: [],
	});
}
