import { useQuery } from "@tanstack/react-query";
import { usersKeys } from "../queryKeys";
import { getUserPosts } from "../../services/UserService";

export function useGetUserPosts(id: number | string) {
	return useQuery({
		queryKey: usersKeys.oneWithPosts(id),
		queryFn: () => getUserPosts(id),
	});
}
