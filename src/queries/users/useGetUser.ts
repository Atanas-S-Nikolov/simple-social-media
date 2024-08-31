import { useQuery } from "@tanstack/react-query";
import { usersKeys } from "../queryKeys";
import { getUser } from "../../services/UserService";

export function useGetUser(id: number | string) {
	return useQuery({
		queryKey: usersKeys.one(id),
		queryFn: () => getUser(id),
	});
}
