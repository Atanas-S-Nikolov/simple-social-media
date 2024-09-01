import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "../queryKeys";
import { getPostComments } from "../../services/PostService";

export function useGetPostComments(id: string | number) {
	return useQuery({
		queryKey: postsKeys.oneWithComments(id),
		queryFn: () => getPostComments(id),
	});
}
