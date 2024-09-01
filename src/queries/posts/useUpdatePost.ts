import { useMutation } from "@tanstack/react-query";
import { postsKeys } from "../queryKeys";
import { updatePost } from "../../services/PostService";

export function useUpdatePost() {
	return useMutation({
		mutationKey: postsKeys.update(),
		mutationFn: updatePost,
	});
}
